require("dotenv").config();
const connectDb = require("./db/connect");
const Product = require("./models/products");
const productJson = require("./products.json");
const start = async () => {
    try {
        await connectDb(process.env.URI);
        await Product.deleteMany();
        await Product.create(productJson);
        console.log("success ");
    } catch (error) {
        console.log(error);
    }
}
start();