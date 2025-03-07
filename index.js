//npmjs.com
// sahatanush05
// oR2RkVfNCbX0OiWb
// mongodb+srv://sahatanush05:oR2RkVfNCbX0OiWb@cluster0.cgxyx.mongodb.net/

const express = require("express")
const mongoose = require("mongoose")
const Product = require('./model/product.model.js')
const app = express();

// middleware
app.use(express.json())





app.get("/",(req,res)=>{
    console.log("Hello World");
    res.send("Hello World from Updated API");
})



// 1. Create
app.post("/api/products",async(req,res)=>{
    try {
        const product = await Product.create(req.body)
        res.status(200).json(product)
    } catch (error) {
        res.status(500).json(
            {
                message:error.message
            })
        
    }
})




//Read orr Find All
app.get("/api/products", async (req, res) => {
  try {
    const product = await Product.find({});
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});




// 2. Find only 1 
app.get("/api/products/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const product =await Product.findById(id);
        res.status(200).json(product)
        
    } catch (error) {
        res.status(500).json({
            message:message.error
        })
        
    }

})




// 3. Update a Product 
app.put("/api/products/:id",async(req,res)=>{
    try {
        const {id} = req.params;
        const product = await Product.findByIdAndUpdate(id,req.body,{new:true});
        if(!product){
            return res.status(404).json({
                message:"Product Not found"

            })
        }

        const updatedProduct = await Product.findById(id)
        res.status(200).json(updatedProduct)
    } catch (error) {
        res.status(500).json({
            message:error.message
        })
    }
})





// 4.Delete a Product....
app.delete("/api/products/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const product = await Product.findByIdAndDelete(id, req.body, {
      new: true,
    });
    if (!product) {
      return res.status(404).json({
        message: "Product Not found",
      });
    }

   res.status(200).json({
        message:"Product deleted successfully"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
});



app.listen(3000, () => {
  console.log("Server is running on 3000");
});



mongoose.connect(
  "mongodb+srv://sahatanush05:oR2RkVfNCbX0OiWb@cluster0.cgxyx.mongodb.net/MyDatabase"
).then(()=>{
    console.log("DataBase Connected");
}).catch((error)=>{
     console.log("Connection failed",error);
}); 