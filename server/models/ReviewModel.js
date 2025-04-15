const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    id: {
      type: String,
      required: true,
      unique:true,
     
    },
    image: { type: String, required: true }

    
  },
  
  { timestamps: true }
);

const ReviewModel = mongoose.model("ReviewModel", userSchema);
module.exports = ReviewModel;

