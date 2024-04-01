const Product = require("../models/products");
const getAllProducts = async(req,res)=>{
    const {company, name, featured, sort,select} = req.query; 
    const queryObject = {};
    if(company){
        queryObject.company = company;
    }
    if(name){
        queryObject.name = {$regex:name,$options:"i"};
    }
    if(featured){
        queryObject.featured = featured;
    }
    let apiData =  Product.find(queryObject);
    if(sort){
        let sortFix = sort.split(",").join(" ");
        apiData = apiData.sort(sortFix);
    }
    if(select){
        let selectFix = select.split(",").join(" ");
        apiData = apiData.select(selectFix);
    }

    let page = Number(req.query.page) || 1;
    let limit = Number(req.query.limit) || 10;
    let skip = (page-1) * limit;
    apiData = apiData.skip(skip).limit(limit);
    const Products = await apiData;
    res.status(200).json({Products});
}


const getAllProductsTesting = async(req,res)=>{
    const data = await Product.find(req.query); // ?key=value
    res.status(200).json({data});
}

module.exports = {getAllProducts,getAllProductsTesting};