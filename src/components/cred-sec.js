import React from 'react'

import PropTypes from 'prop-types'

import './cred-sec.css'

const CredSec = (props) => {
  return (
    <div className={`cred-sec-blog-post-card ${props.rootClassName} `}>
      <div className="cred-sec-container">
        <div className="cred-sec-container1">
          <span className="cred-sec-text">{props.app}</span>
          <span className="cred-sec-text1">{props.when}</span>
        </div>
        <h1 className="cred-sec-text2">{props.user}</h1>
        <span className="cred-sec-text3">{props.pass}</span>
      </div>
    </div>
  )
}

CredSec.defaultProps = {
  app: 'Application',
  pass: 'Password Info',
  rootClassName: '',
  when: '3 days ago',
  user: 'Username',
}

CredSec.propTypes = {
  app: PropTypes.string,
  pass: PropTypes.string,
  rootClassName: PropTypes.string,
  when: PropTypes.string,
  user: PropTypes.string,
}

export default CredSec
