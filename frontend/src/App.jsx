import React from 'react'
import { Button } from './components/ui/button'
import Navbar from './components/components_lite/Navbar'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Login from './components/authentication/login'
import Register from './components/authentication/Register'
import Home from './components/components_lite/Home'
import PrivacyPolicy from './components/components_lite/PrivacyPolicy'
import TermsAndConditions from './components/components_lite/TermsAndConditions.jsx'
import Jobs from './components/components_lite/Jobs'
import Browse from './components/components_lite/Browse'
import Profile from './components/components_lite/Profile'

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
  },
  {
    path: '/Jobs',
    element: <Jobs/>
  },
  {
    path: '/Home',
    element: <Home/>
  },
  {
    path: '/Browse',
    element: <Browse/>
  },
  {
    path: '/Profile',
    element: <Profile/>
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
