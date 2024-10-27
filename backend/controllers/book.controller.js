import { addBook, deleteBook, getBookById, getBooks ,updateBook } from "../service/book.service.js";
import asyncWrapper from '../middlewares/asyncWrapper.js'

export const addbook = asyncWrapper (async(req,res)=>{
    const book = {
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear
    }

       await addBook(book);

    return res.status(201).json({
        success:true,
        message:'book is created',
        data:book
    })
})

export const getbooks = asyncWrapper (async (req,res)=>{
    const data= await getBooks();
    return res.status(200).json({
        success:true,
        data:data
    })
})

export const getbookbyid = asyncWrapper(async (req,res)=>{
    const {id}=req.params;
    const data = await getBookById(id);
    return res.status(200).json({
        success:true,
        data:data
    })
})

export const updatebook = asyncWrapper(async (req,res)=>{
    const {id}=req.params;
    const book = {
        title:req.body.title,
        author:req.body.author,
        publishYear:req.body.publishYear
    }
    const data = await updateBook(id,book);
    return res.status(200).json({
        success:true,
        message:'book is updated',
        data:data
    })
})

export const deletebook = asyncWrapper(async (req,res)=>{
    const {id}=req.params;
    const data =  await deleteBook(id);
    return res.status(200).json({
        success:true,
        message:'book is deleted',
        data:data
    })
})
