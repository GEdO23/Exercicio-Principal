import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Error from './routes/Error/index.jsx'
import Home from './routes/Home/index.jsx'
import Produtos from './routes/Produtos/index.jsx'

const router = createBrowserRouter(
  [
    {path: '/', element: <App/>, 
    errorElement: <Error/>, 
    children: [
      { path: '/', element: <Home /> }, 
      { path: '/produtos', element: <Produtos />}, 
    ]}
  ]
)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
