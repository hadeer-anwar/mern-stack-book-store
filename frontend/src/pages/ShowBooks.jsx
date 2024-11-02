import { useEffect, useState } from "react";
import axios from 'axios';
import { useParams } from 'react-router-dom';
import BackButton from "../components/BackButton";
import Spinner from '../components/Spinner';
import { API_URL } from '../common/index';
import { format } from 'date-fns';

const ShowBooks = () => {
  const [book, setBook] = useState({});
  const [loading, setLoading] = useState(false);
  const { id } = useParams();

  useEffect(() => {
    setLoading(true);
    axios
      .get(`${API_URL}/${id}`)
      .then((response) => {
        setBook(response.data.data);
        console.log(book)
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div className="p-4">
      <BackButton />
      <h1 className="text-3xl my-4">Show Book Details</h1>
      {
        loading ? (
          <Spinner />
        ) : (
          <div className="flex flex-col border-2 border-sky-400 rounded-xl w-fit p-4">
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">ID</span>
              <span>{book._id}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">Title</span>
              <span>{book.title}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">Author</span>
              <span>{book.author}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">Publish Year</span>
              <span>{book.publishYear}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">Create Time</span>
              <span>{book.createdAt ? format(new Date(book.createdAt), 'PPPpp') : 'N/A'}</span>
            </div>
            <div className="my-4">
              <span className="text-xl mr-4 text-grey-500">Last Update Time</span>
              <span>{book.updatedAt ? format(new Date(book.updatedAt), 'PPPpp') : 'N/A'}</span>
            </div>
          </div>
        )
      }
    </div>
  );
};

export default ShowBooks;
