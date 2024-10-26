import mongoose from "mongoose"

const bookSchema=mongoose.Schema(
    {
        title:{
            type:String,
            required:true
        },
        author:{
            type:String,
            required:true
        },
        publishYear:{
            type:Number,
            required:true
        }
    },
    {
        timestamp:true
    }
);
 const Book=mongoose.model('Book',bookSchema);
 export default Book;