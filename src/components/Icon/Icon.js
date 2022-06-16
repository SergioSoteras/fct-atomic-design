import React from 'react';
import PropTypes from 'prop-types';
import './icon.css';

export const Icon = ({name,size,animation,...props}) => {
    let tamaño=""
    let animacion=""

    switch( size ){
        case 'small':
            tamaño = 'fa-2xs'; break;
        case 'big':
            tamaño = 'fa-2xl'; break;
        default:
          break;
    }

    switch( animation ){
    case 'beat':
        animacion = 'fa-beat'; break;
    case 'bounce':
        animacion = 'fa-bounce'; break;
    case 'shake':
        animacion = 'fa-shake'; break;
    case 'spin':
        animacion = 'fa-spin'; break;
    case 'flip':
        animacion = 'fa-flip'; break;    
    default:
      break;
    }

  return (<>
    <i className={['fa-solid', `fa-${name}`, tamaño, animacion].join(' ')} {...props}/></>
  )
}

Icon.propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOf(['small','medio','big']),
    animation: PropTypes.oneOf(['beat','bounce', 'shake','spin','flip',""]),
}

Icon.defaultProps = {
    name: '',
    size:'medio',
    animation:'',
}

export const Brand = ({name,size}) => {
    let tamaño=""

    switch( size ){
        case 'small':
            tamaño = 'fa-2xs'; break;
        case 'big':
            tamaño = 'fa-2xl'; break;
        default:
          break;
    }

  return (<>
    <i className={['fa-brands', `fa-${name}`, tamaño].join(' ')}/></>
  )
}

Brand.propTypes = {
    name: PropTypes.string,
    size: PropTypes.oneOf(['small','medio','big']),
}

Brand.defaultProps = {
    name: '',
    size:'medio',
}