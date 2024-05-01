import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>PCRP Staff Requests</title>
        <meta property="og:title" content="PCRP Staff Requests" />
      </Helmet>
      <header data-role="Accordion" className="home-header">
        <img
          alt="image"
          src="/logo%20transparent-500w.png"
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
