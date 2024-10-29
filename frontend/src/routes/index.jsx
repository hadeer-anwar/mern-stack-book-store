import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home'
import CreatBook from '../pages/CreateBook'
import DeleteBook from '../pages/DeleteBook'
import UppdateBook from '../pages/UpdateBook'
import ShowBooks from '../pages/ShowBooks'
const router = createBrowserRouter([{
  path :"/",
  element :<App/>,
  children:[
    {
        path:"",
        element:<Home />
      },
    {
      path:"/books/create",
      element:<CreatBook />
    },
    {
      path:"books/details/:id",
      element: <ShowBooks />
    },
    {
      path:"books/edit/:id",
      element: <UppdateBook />
    },
    {
      path:"books/delete/:id",
      element: <DeleteBook />
    }
  ]
}])

export default router;