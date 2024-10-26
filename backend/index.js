import express from "express";
import {PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
const app=express();

app.get('/',(req,res)=>{
    res.send("app is running")
})


mongoose.connect(mongoDBURL).then(()=>{
    console.log("connected to database ")
    app.listen(PORT,()=>{
        console.log(`app running on port : ${PORT}`)
    })
}).catch((err)=>{
    console.log(err);
})