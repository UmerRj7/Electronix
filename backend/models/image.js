var mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
    name :{
        type:String,
     
    },
    image:{
        type:String
    }
})

module.exports = ImageModel = mongoose.model('imageModel',ImageSchema);