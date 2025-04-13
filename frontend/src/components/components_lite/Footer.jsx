import React from 'react'
import { Link } from 'react-router-dom'
import PrivacyPolicy from './PrivacyPolicy'
import TermsAndConditions from './TermsAndConditions'

const Footer = () => {
  return (
    <div className='text-center p-2 bg-gray-100'>
      <p>2025 Hirely-Job Board. All Rights Reserved</p>
      <p>Powered By <a href="omsuhagir123@gmail.comn"> Om Suhagir </a></p>
      <p>
        <Link to={"/PrivacyPolicy"}>Privacy Policy </Link> | 
        <Link to={"/TermsAndConditions"}> Terms Of Services</Link>
      </p>
    </div>
  )
}

export default Footer
