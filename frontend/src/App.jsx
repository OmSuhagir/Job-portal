import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/components_lite/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/authentication/login'
import Register from './components/authentication/Register'
import Home from './components/components_lite/Home'
import PrivacyPolicy from './components/components_lite/PrivacyPolicy'
import TermsAndConditions from './components/components_lite/TermsAndConditions.jsx'

const appRouter = createBrowserRouter ([
  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/login",
    element: <Login/>
  },
  {
    path: "/register",
    element: <Register/>
  },
  {
    path: "/PrivacyPolicy",
    element: <PrivacyPolicy/>
  },
  {
    path: "/TermsAndConditions",
    element: <TermsAndConditions/>
  }
]);

function App() {
  return (
    <div>
      <RouterProvider router= {appRouter}></RouterProvider>
    </div>
  )
}

export default App
