const express = require("express");
let router = express.Router();
let { User } = require("../../models/user");
var bcrypt = require("bcryptjs");
const _ = require("lodash");
const jwt = require("jsonwebtoken");
const config = require("config");
const auth = require("../../middlewares/auth");
const admin = require("../../middlewares/admin");


//Show ALL users
router.get("/", async (req, res) => {
  let users = await User.find();
  return res.send(users);
});

//Delete a record
router.delete("/:id", async (req, res) => {
  let user = await User.findByIdAndDelete(req.params.id);
  return res.send(user);
});

//update a record
router.put("/:id", async (req, res) => {
  let user = await Product.findById(req.params.id);
  user.name = req.body.name;
  user.email = req.body.email;
  await user.save();
  return res.send(product);
});

//register
router.post("/register", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (user) return res.status(400).send("User with given Email already exist");
  user = new User();
  user.name = req.body.name;
  user.email = req.body.email;
  user.password = req.body.password;
  await user.generateHashedPassword();
  await user.save();
  return res.send(_.pick(user, ["name", "email"]));
});
//login
router.post("/login", async (req, res) => {
  let user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("User Not Registered");
  let isValid = await bcrypt.compare(req.body.password, user.password);
  if (!isValid) return res.status(401).send("Invalid Password");
  let token = jwt.sign(
    { _id: user._id, name: user.name },
    config.get("jwtPrivateKey")
  );
  res.send(token);
});
module.exports = router;
