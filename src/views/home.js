import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PCRP Staff Requests</title>
        <meta property="og:title" content="PCRP Staff Requests" />
        <meta
          property="og:image"
          content="https://aheioqhobo.cloudimg.io/v7/_playground-bucket-v2.teleporthq.io_/0a129e73-fcb7-430b-ad24-40db9ac7fa48/a4d26c02-4b80-4f67-be8a-52f52d3c8cf2?org_if_sml=1&amp;force_format=original"
        />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <img
          alt="image"
          src="/logo%20transparent-500w.webp"
          className="home-image"
        />
        <div className="home-separator"></div>
      </header>
      <div className="home-hero">
        <form className="home-form">
          <div className="home-container1">
            <h1 className="home-text">
              <span>OTP Login</span>
              <br></br>
            </h1>
            <span className="home-text3">Discord User ID:</span>
            <input
              type="number"
              disabled="true"
              required="true"
              placeholder="Enter Discord ID"
              className="home-textinput input"
            />
            <button
              type="submit"
              disabled="true"
              className="home-button button"
            >
              Login
            </button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default Home
