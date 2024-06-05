import { createBrowserRouter } from "react-router-dom";

import DashboardLayout from "../layout/DashboardLayout";
import Content from "../components/content/Content";
import AddUser from "../components/Adduser/AddUser";
import UserList from "../components/Userlist/UserList";
import EditUser from "../components/Userlist/EditUser";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <DashboardLayout />,
    children: [
      {
        path: "/",
        element: <Content />,
      },
      {
        path:"/addUser",
        element:<AddUser/>
      },
      {
        path:"/userList",
        element:<UserList/>
      },
      {
        path:"/uerList/edit/:id",
        element:<EditUser/>
      }
    ],
  },
]);
