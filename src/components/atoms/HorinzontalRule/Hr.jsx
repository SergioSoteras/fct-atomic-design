import React from 'react'
import PropTypes from 'prop-types';

import './hr.css'

export const Hr = ({tipo}) => {
  return (
    <hr className={`hr${tipo}`}/>
  )
}

Hr.propTypes = {
    tipo: PropTypes.string
}

Hr.defaultProps = {
    tipo:'1',
}