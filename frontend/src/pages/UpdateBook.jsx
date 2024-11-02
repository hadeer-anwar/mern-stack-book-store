
import { useState, useEffect } from "react";
import Spinner from "../components/Spinner";
import BackButton from '../components/BackButton.jsx'
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";
import { API_URL } from "../common";


const UpdateBook = () => {


  const [bookData, setBookData] = useState({
    title:'',
    author:'',
    publishYear:''
  }) 
 const [loading,setLoading]=useState(false)
const navigate = useNavigate();
const {id} = useParams()

useEffect(()=>{
  setLoading(true)
  axios.get(`${API_URL}/${id}`).then(response=>{
    setBookData({
      title:response.data.data.title,
      author:response.data.data.author,
      publishYear:response.data.data.publishYear
    })
    console.log(response.data.data)
    setLoading(false)
  }).catch(err=>{
    console.log(err)
    setLoading(false)
  })
},[])
  const handleEditBook = ()=>{ 
   
    setLoading(true)
    axios
    .put(`${API_URL}/${id}`,bookData)
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
   
     setBookData((prev)=>{
      return {
        ...prev,
        [name]:value
      }
     })
  }

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Edit Book</h1>

      {
        loading ? (<Spinner />):''
      }

      <div className="flex flex-col border-2 border-sky-400 rounded-xl w-[600px] p-4 mx-auto">
           <div className="my-4">
             <label className="text-xl mr-4 text-grey-500">Title</label>
             <input type="text"
             name="title"
             value={bookData.title} 
             onChange={handleOnchange}
             className="border-2 border-gray-500 py-2 px-4 w-full"
             />
           </div>
           <div className="my-4">
             <label className="text-xl mr-4 text-grey-500">Author</label>
             <input type="text"
             name="author"
             value={bookData.author} 
             onChange={handleOnchange}
             className="border-2 border-gray-500 py-2 px-4 w-full"
             />
           </div>
           <div className="my-4">
             <label className="text-xl mr-4 text-grey-500">Publish Year</label>
             <input type="text"
             name="publishYear"
             value={bookData.publishYear} 
             onChange={handleOnchange}
             className="border-2 border-gray-500 py-2 px-4 w-full"
             />
           </div>
           <button className="p-2 bg-sky-300 m-8" onClick={handleEditBook}>Save</button>
      </div>
    </div>
  )
}

export default UpdateBook;
