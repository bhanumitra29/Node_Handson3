const express = require('express');
const { categoryRouter } = require('./categoryRouting');
const app = express();
const PORT = 2923;
app.use((req,res,next) =>{
    console.log("This is under Application level Middleware")
    next();
})

app.get('/',(req,res)=>{
    res.send("This is home")
})

app.use('/api',categoryRouter)

app.listen(PORT,()=>{
    try{
        console.log("This file is running on Port 2923");
    }
    catch(err){
        console.log("Error", err);
    }
})

