var mongoose = require("mongoose");
// const Joi = require("@hapi/joi");
var itemSchema = mongoose.Schema({
    Image:String,
    Title: String,
    Text: String,
    Next: String
});

var Item = mongoose.model("Item",itemSchema);
// function validateProduct(data) {
//     const schema = Joi.object({
//       Image: Joi.Image(), 
//       Title: Joi.string().min(3).max(10).required(),
//       Text: Joi.string().min(3).max(10).required(),
//       Next: Joi.string().min(3).max(10).required()
//     });
//     return schema.validate(data, { abortEarly: false });
//   }
module.exports = Item;