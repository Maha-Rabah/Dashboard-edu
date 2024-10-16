import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter,RouterProvider} from "react-router-dom";
import {routes} from "./router/Allrouter"
import './index.css'

const router = createBrowserRouter(routes,
  {
    basename: '/dash-edu',
  });

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
