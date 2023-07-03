const express = require("express");
const Item = require("../../models/item");
let router = express.Router();
const _ = require("lodash");

//get items
router.get("/", async (req, res) => {
    let items = await Item.find();
    return res.send(items);
 });

//Delete a record
router.delete("/:id", async (req, res) => {
    let item = await Item.findByIdAndDelete(req.params.id);
    return res.send(item);
  });

//register item
router.post("/register", async (req, res) => {
    let item = await Item.findOne({ Title: req.body.Title });
    if (item) return res.status(400).send("Item with given name already exist");
    item = new Item();
    item.Image = req.body.Image;
    item.Title = req.body.Title;
    item.Text = req.body.Text;
    item.Next = req.body.Next;
    await item.save();
    return res.send(_.pick(item, ["Image", "Title","Text","Next"]));
  });

module.exports = router;
