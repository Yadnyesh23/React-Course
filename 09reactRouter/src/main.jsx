import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Contact from './components/Contact/Contact.jsx'
import Home from './components/Home/Home.jsx'
import User from './components/User/User.jsx'

//First way to create routes.
// const router = createBrowserRouter([
//   {
//     path:'/',
//     element:<Layout />,
//     children:[
//       {
//         index: true,
//         element:<Home />
//       },
//       {
//         path:'about',
//         element:<About />
//       }, 
//       {
//         path:'contact',
//         element:<Contact />
//       }
//     ]
//   }
// ])

// Second way to create route

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout/>}>
      <Route index={true} element={<Home />} />
      <Route path='about' element={<About />} />
      <Route path='contact' element={<Contact />} />
      <Route path='user/:userid' element={<User />} />
    </Route>
  )
)
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>,
)
