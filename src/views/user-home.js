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
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0a129e73-fcb7-430b-ad24-40db9ac7fa48/a4d26c02-4b80-4f67-be8a-52f52d3c8cf2?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Accordion" className="user-home-header">
        <img
          alt="image"
          src="/logo%20transparent-500w.webp"
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
