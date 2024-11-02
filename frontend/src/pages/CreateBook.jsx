
import { useState } from "react";
import Spinner from "../components/Spinner";
import BackButton from '../components/BackButton.jsx'
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../common";


const CreateBook = () => {


  const [newBook, setNewBook] = useState({
    title:'',
    author:'',
    publishYear:''
  }) 
 const [loading,setLoading]=useState(false)
const navigate = useNavigate();

  const handleSaveBook = ()=>{
   
    setLoading(true)
    axios
    .post(`${API_URL}`,newBook)
    .then(()=>{
      setLoading(false)
      navigate('/')
    })
    .catch((error)=>{
      console.log(error)
      setLoading(false)
      alert(`An error occurred: ${error.message}`)
    })
  }
 
  const handleOnchange = (e)=>{
     const {name,value} = e.target;
   
     setNewBook((prev)=>{
      return {
        ...prev,
        [name]:value
      }
     })
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Create Book</h1>

      {
        loading ? (<Spinner />):''
      }

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
           <div className="my-4">
             <label className="text-xl mr-4 text-grey-500">Title</label>
             <input type="text"
             name="title"
             value={newBook.title} 
             onChange={handleOnchange}
             className="border-2 border-gray-500 py-2 px-4 w-full"
             />
           </div>
           <div className="my-4">
             <label className="text-xl mr-4 text-grey-500">Author</label>
             <input type="text"
             name="author"
             value={newBook.author} 
             onChange={handleOnchange}
             className="border-2 border-gray-500 py-2 px-4 w-full"
             />
           </div>
           <div className="my-4">
             <label className="text-xl mr-4 text-grey-500">Publish Year</label>
             <input type="text"
             name="publishYear"
             value={newBook.publishYear} 
             onChange={handleOnchange}
             className="border-2 border-gray-500 py-2 px-4 w-full"
             />
           </div>
           <button className="p-2 bg-sky-300 m-8" onClick={handleSaveBook}>Save</button>
      </div>
    </div>
  )
}

export default CreateBook;
