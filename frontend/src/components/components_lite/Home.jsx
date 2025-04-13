import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Catagories from './Catagories'
import LatestJob from './LatestJob'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <Catagories/>
      <LatestJob/>
      <Footer/>
    </div>
  )
}

export default Home
