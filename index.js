//npmjs.com

const express = require("express")
const app = express()

app.get("/",(req,res)=>{
    console.log("Hello World");
})

app.listen(3000,()=>{
    console.log("Server is running on 3000");
})