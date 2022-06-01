import React from 'react'
import PropTypes from 'prop-types';

import './hr.css'

export const Hr = ({style}) => {
  return (
    <hr className={`hr${style}`}/>
  )
}

Hr.propTypes = {
    style: PropTypes.number
}

Hr.defaultProps = {
    style: 1
}