import {createBrowserRouter} from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home'
import CreateBook from '../pages/CreateBook'
import DeleteBook from '../pages/DeleteBook'
import UpdateBook from '../pages/UpdateBook'
import ShowBooks from '../pages/ShowBooks'
const router = createBrowserRouter([{
  path :"/",
  element :<App />,
  children:[
    {
        path:"",
        element:<Home />
      },
    {
      path:"/books/create",
      element:<CreateBook />
    },
    {
      path:"/books/details/:id",
      element: <ShowBooks />
    },
    {
      path:"/books/edit/:id",
      element: <UpdateBook />
    },
    {
      path:"/books/delete/:id",
      element: <DeleteBook />
    }
  ]
}])

export default router;