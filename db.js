const mongoose = require("mongoose");

var mongoDBURL = 'mongodb+srv://vijay:7979@cluster0.8iy7sib.mongodb.net/CarRental'

mongoose.connect(mongoDBURL , {useUnifiedTopology:true , useNewUrlParser:true})

var dbconnect = mongoose.connection

dbconnect.on('error' , ()=>{
    console.log(`Mongo DB Connection Failed`);
})

dbconnect.on('connected' , ()=>{
    console.log(`Mongo DB Connection Successfull`);
})

module.exports = mongoose