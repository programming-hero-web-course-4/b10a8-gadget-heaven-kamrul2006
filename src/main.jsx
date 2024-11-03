import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Root from './components/Root/Root';
import Banner from './components/pages/Banner';



const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <div>404</div>,
    children: [
      {
        path: '/',
        element: <Banner></Banner>
      },
      {
        path: '/statistics',
        element: <div>hiiiiiiiii</div>
      },
      {
        path: '/dashboard',
        element: <div>hiiiiiiiii  gggggg</div>
      },
      {
        path: '/about',
        element: <div>hiiiiiiiii  gggggg    hhhh</div>
      },
    ]
  },
]);



createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
