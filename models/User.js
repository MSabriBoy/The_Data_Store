const mongoose = require('../db');

const userSchema = new mongoose.Schema({
    name:String,
    age:Number,
    email:String
});

const User= mongoose.model("User", userSchema);

module.exports = User;