import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Router from './Routes';


const Routes = createBrowserRouter(Router)
ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={Routes} />
)
