import { createBrowserRouter } from "react-router-dom";
import Error from "../Pages/Error/Error";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home";
import SignUp from "../Pages/SignUp/SignUp";
import Login from "../Pages/Login/Login";
import Dashboard from "../Pages/Dashboard/Dashboard";
import DashboardLayout from "../Layout/DashboardLayout";
import PrivateRoute from "./PrivateRoute/PrivateRoute";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        errorElement: <Error />,
        children: [
            {
                path: '/',
                element: <Login />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/signup',
                element: <SignUp />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/dashboard',
                element: <PrivateRoute><DashboardLayout /></PrivateRoute>,
                children: [{
                    path: '/dashboard',
                    element: <PrivateRoute> <Dashboard /></PrivateRoute>
                }
                ]
            }
        ]
    }
])