const express = require("express");

const app = express();

app.use("/test",(req,res)=>{
    res.send("hello from server")
})

app.listen(3000,()=>{
    console.log("The server is running successfully");
});