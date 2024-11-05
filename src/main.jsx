import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Banner from './components/pages/Banner';
import Error from './components/Fixed/error';
import Details from './components/pages/Deatails';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './components/pages/Dashboard';
import Statistics from './components/pages/Statistics';
import About from './components/pages/About';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <Error></Error>,
    children: [
      {
        path: '/',
        loader: () => fetch("/AllProducts.json"),
        element: <Banner></Banner>
      },
      {
        path: '/product/:Id',
        loader: () => fetch("/AllProducts.json"),
        element: <Details></Details>
      },
      {
        path: '/statistics',
        loader: () => fetch("/AllProducts.json"),
        element: <Statistics></Statistics>
      },
      {
        path: '/dashboard',
        loader: () => fetch("/AllProducts.json"),
        element: <Dashboard/>
      },
      {
        path: '/aboutUs',
        element: <About></About>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
    <ToastContainer />
  </StrictMode>,
)
