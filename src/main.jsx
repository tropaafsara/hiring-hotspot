import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Blog from './components/Blog/Blog';
import AppliedJobs from './components/AppliedJobs/AppliedJobs';
import Statistics from './components/Statistics/Statistics';
import Home from './components/Home/Home';
import ErrorPage from './components/ErrorPage';
import JobDetails from './components/JobDetails';
import { productsAndCartData } from './loaders/getCart&ProductData';
const router = createBrowserRouter([
  {
    path: '/',
    element: <App></App>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path: '/',
        element: <Home></Home>,
        loader: ()=> fetch('featuredJobs.json'),
        
      },
      
      {
        path: '/details/:id',
        element: <JobDetails></JobDetails>,
        loader: ({params})=> fetch('/featuredJobs.json'),
      },
      {
        path: '/appliedjobs',
        element: <AppliedJobs></AppliedJobs>,
        loader: productsAndCartData,
      },
      {
        path: '/statistics',
        element: <Statistics></Statistics>,
      },
      
      {
        path: '/blog',
        element: <Blog></Blog>,
      }
    ]
  },
  
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
