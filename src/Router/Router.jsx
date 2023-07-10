import {
    createBrowserRouter,
  } from "react-router-dom";

import Main from "../Layout/Main";
import Home from "../Page/Home/Home";
import About from "../Page/Home/About/About";
import Frontend from "../Page/Programming/Frontend/Frontend";
import All from "../Page/Programming/All/All";
import Backend from "../Page/Programming/Backend/Backend";
import Tools from "../Page/Programming/Tools/Tools";
import Programming from "../Page/Programming/Programming";



 export const router = createBrowserRouter([
    {
      path: "/",
      element: <Main></Main>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: 'about',
          element: <About></About>
        },
        {
          path: 'all',
          element: <All></All>
        },
        {
          path: '/frontend',
          element: <Frontend></Frontend>
        },
        {
          path: '/backend',
          element: <Backend></Backend>
        },
        {
          path: '/tools',
          element: <Tools></Tools>
        }
      ]
    },
    
  ]);