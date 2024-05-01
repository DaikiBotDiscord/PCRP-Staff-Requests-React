import React from 'react'

import { Helmet } from 'react-helmet'

import CredSec from '../components/cred-sec'
import './user-home.css'

const UserHome = (props) => {
  return (
    <div className="user-home-container">
      <Helmet>
        <title>UserHome - PCRP Staff Requests</title>
        <meta property="og:title" content="UserHome - PCRP Staff Requests" />
      </Helmet>
      <header data-role="Accordion" className="user-home-header">
        <img
          alt="image"
          src="/logo%20transparent-500w.png"
          className="user-home-image"
        />
        <div className="user-home-separator"></div>
      </header>
      <div className="user-home-cred-container">
        <div className="user-home-container1">
          <CredSec rootClassName="cred-sec-root-class-name3"></CredSec>
        </div>
      </div>
    </div>
  )
}

export default UserHome
