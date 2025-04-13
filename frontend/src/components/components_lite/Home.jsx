import React from 'react'
import Navbar from './Navbar'
import Header from './Header'
import Catagories from './Catagories'

const Home = () => {
  return (
    <div>
      <Navbar></Navbar>
      <Header/>
      <Catagories/>
      {/* <LatestJobs/>
      <Footer/> */}
    </div>
  )
}

export default Home
