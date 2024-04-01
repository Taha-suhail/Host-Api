require("dotenv").config();
const express = require('express');
const app = express();

const PORT = process.env.PORT || 5000;
const connectDb = require("./db/connect");

const products_routes = require("./routes/products");


app.get("/",(req,res)=>{
    res.send("hi I am live");
})
//middleware or accessing routes here in the app.js
app.use("/api/products",products_routes);

const start = async()=>{
    try {
        await connectDb(process.env.URI);
        app.listen(PORT,()=>{
            console.log("the port is running");
        })
    } catch (error) {
        console.log(error)
    }
}

start();