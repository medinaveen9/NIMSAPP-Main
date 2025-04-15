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

const UserModel = mongoose.model("User", userSchema);
module.exports = UserModel;


