const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
id:Number,
name:String,
color:String,
price:Number,
category:String,
brand:String,
photo:String
});





module.exports = mongoose.model("Product", productSchema);
