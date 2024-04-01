const mongoose = require('mongoose');



const connectDb = (uri)=>{
    mongoose.connect(uri);
    console.log("db is connected");
}

module.exports = connectDb;