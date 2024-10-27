import express from 'express'
import {addbook, deletebook, getbookbyid, getbooks, updatebook} from '../controllers/book.controller.js'

const bookRouter=express.Router();

bookRouter.post('/',addbook);
bookRouter.get('/',getbooks);
bookRouter.get('/:id',getbookbyid);
bookRouter.put('/:id',updatebook);
bookRouter.delete('/:id',deletebook)


export default bookRouter;
