const mongoose= require('mongoose');

const url= "mongodb+srv://MSB:HACKERMSB@cluster0.ce7vzoe.mongodb.net/?appName=Cluster0"

mongoose.connect(url)
.then(()=>console.log("MongoDB Connected..."))
.catch((err)=>console.log(err));

module.exports = mongoose;