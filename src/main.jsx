import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import {
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import MainLayout from './MainLayout.jsx';
import router from './routes/Routes.jsx';


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}>
      <MainLayout />
    </RouterProvider>
  </React.StrictMode>,
)
