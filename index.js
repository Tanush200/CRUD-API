//npmjs.com
// sahatanush05
// oR2RkVfNCbX0OiWb
// mongodb+srv://sahatanush05:oR2RkVfNCbX0OiWb@cluster0.cgxyx.mongodb.net/
//43.43
const express = require("express")
const mongoose = require("mongoose")

const Product = require('./model/product.model.js')

const app = express();
app.use(express.json())

app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World from Updated API");
})

app.post("/api/products",async(req,res)=>{
    try {
        
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json({message:error.message})
        
    }
})



app.listen(3000, () => {
  console.log("Server is running on 3000");
});

mongoose.connect(
  "mongodb+srv://sahatanush05:oR2RkVfNCbX0OiWb@cluster0.cgxyx.mongodb.net/"
).then(()=>{
    console.log("DataBase Connected");
}).catch("Connection Failed");