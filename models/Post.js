const mongoose = require('../db');

const Postschema = mongoose.Schema({
    title: String,
    content:String,
    createdAt:Date

})