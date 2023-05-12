// Import the mongoose module
const mongoose = require('mongoose');
const dotenv = require('dotenv').config();

//Set up default mongoose connection
var mongoDB = "mongodb+srv://kavyabanan8498:czSIbyv9GPmnLxuW@cluster0.14kzkde.mongodb.net/"
module.exports = mongoose.connect(mongoDB, { useNewUrlParser: true, useUnifiedTopology: true }).then(() => console.log("CONNECTION ESTABLISHED"));



