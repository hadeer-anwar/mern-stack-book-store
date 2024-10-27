import Book from '../models/book.model.js';
import '../utils/appError.js';

export const addBook= async(data)=>{

    const book = await Book.create(data);
    if(!book)
        throw new  AppError('can not create book');

    return data;
}

export const getBooks = async()=>{
    const bookList = Book.find();
    if(!bookList)
        throw new AppError('can not get books')

    return bookList;
}

export const getBookById =async (id)=>{

    const book =Book.findById(id);
    if(!book)
        throw new AppError("book not found")

    return book;
}

export const updateBook = async (id,data)=>{
    const updatedBook= Book.findByIdAndUpdate(id,data,{new:true});
    if(!updateBook)
        throw new AppError("can not update book");

    return updatedBook;
}

export const deleteBook = async (id)=>{
  const deletedBook = Book.findByIdAndDelete(id);
  if(!deleteBook)
    throw new AppError("can not delete book")

  return deletedBook;
}