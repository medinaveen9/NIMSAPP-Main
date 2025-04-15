const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    image1: String,
    image2: String,
    image3: String,
    image4: String,
  });



  const DeclarationModel = mongoose.model("DeclarationModel", userSchema);
  module.exports = DeclarationModel;