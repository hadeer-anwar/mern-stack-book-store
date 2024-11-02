import express from "express";
import {PORT, mongoDBURL } from "./config.js"
import mongoose from "mongoose"
import cors from 'cors'
import bookRouter from "./routes/book.routes.js";
import errorHandler from "./middlewares/errorHandler.js";

const app=express();

app.use(cors());
app.use(express.json());

app.listen(PORT,()=>{
    console.log(`app running on port : ${PORT}`)
})
mongoose.connect(mongoDBURL,{dbName:"book-store"}).then(()=>{
    console.log("connected to database ")
  
}).catch((err)=>{
    console.log(err);
})



app.get('/',(req,res)=>{
    res.send("app is running")
})

app.use('/api/v1/books',bookRouter)

app.use(errorHandler)


