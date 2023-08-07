import { createBrowserRouter } from 'react-router-dom'
import Main from '../layouts/Main'
import Home from '../Pages/Home/Home'
import Login from '../Pages/Login/Login'
import PrivateRoute from './PrivateRoute'
import SignUp from '../Pages/SignUp/SignUp'
import DashboardLayout from '../layouts/DashboardLayout'
import RoomDetails from '../Pages/RoomDetails/RoomDetails'
import Sidebar from '../components/Dashboard/Sidebar/Sidebar'
import AddRoom from '../Pages/Dashboard/AddRoom/AddRoom'

export const router = createBrowserRouter([
  {
    path: '/',
    element: <Main />,
    children:[
      {
        path:"/",
        element:<Home />
      },
      {
        path:"/room/:id",
        element:<PrivateRoute><RoomDetails></RoomDetails></PrivateRoute>
      },
    ]
  },
  {
    path:"login",
    element:<Login></Login>
  },
  {
    path:"signup",
    element:<SignUp></SignUp>
  },
  {
    path:"/dashboard",
    element:<DashboardLayout />,
    children:[
      {
        path:"/dashboard/add-room",
        element:<AddRoom />
      }
    ]
  }
])
