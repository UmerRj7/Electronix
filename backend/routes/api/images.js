const express = require("express");
const ImageModel = require("../../models/image");
let router = express.Router();
const multer = require('multer');

//storage
const Storage = multer.diskStorage({
    destination: "E:/web/electronix/frontEnd/public/upload",
    filename: (req, file, cb) => {
    cb(null, file.originalname);
    },
});

const upload = multer({
    storage:Storage
}).single('image')

router.get("/",async (req,res) =>{
    let allData = await ImageModel.find();
     res.json(allData);
});

router.post('/upload',(req,res)=>{
    upload(req,res,(err)=>{
        if(err){
            console.log(err)
        }
        else{
            const newImage = new ImageModel({
                name: req.body.name,
                image:req.file.filename,
            });
            newImage
            .save()
            .then(()=> res.send("sucessfully send"))
            .catch(err=>console.log(err));
        }
    })
});

module.exports = router;
