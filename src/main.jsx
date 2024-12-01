import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './Components/Root/Root.jsx';
import Home from './Components/Home/Home.jsx';
import AppliedJobs from './Components/AppliedJobs/AppliedJobs.jsx';
import ErrorPage from './Components/ErrorPage/ErrorPage.jsx';
import JobDetails from './Components/JobDetails/jobDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children:[
      {
        path: '/',
        element:<Home></Home>
      },
      {
        path: '/applied',
        element:<AppliedJobs></AppliedJobs>,
        loader:()=> fetch('/jobs.json')
      },
      {
             path: '/job/:id',
             element:<JobDetails></JobDetails>,
             loader:()=> fetch('../jobs.json')
      }
    ]
  },
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <RouterProvider router={router} />
  </StrictMode>,
)
