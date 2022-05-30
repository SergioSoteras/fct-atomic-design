import React from 'react';
import PropTypes from 'prop-types';
import './boton.css';


/**
 * Primary UI component for user interaction
 */
export const Boton = ({ primary, backgroundColor, size, label, type,children, ...props }) => {
  let mode = '';
  switch( primary ){
    case 'primary':
        mode = 'sergio-boton--primary'; break;
    case 'secondary':
        mode = 'sergio-boton--secondary'; break;
    case 'cancel':
        mode = 'sergio-boton--cancel'; break;
    default:
      break;
  }
  return (
    <button
      type={type}
      className={['sergio-boton', `sergio-boton--${size}`, mode].join(' ')}
      style={backgroundColor && { backgroundColor }}
      {...props}
    >
      {label}{children}
    </button>
  );
};

Boton.propTypes = {
  /**
   * Is this the principal call to action on the page?
   */
  primary: PropTypes.oneOf(['primary','secondary','cancel']),
  type: PropTypes.oneOf(['button','submit','reset']),
  /**
   * What background color to use
   */
  backgroundColor: PropTypes.string,
  /**
   * How large should the button be?
   */
  size: PropTypes.oneOf(['small', 'medium', 'large']),
  /**
   * Button contents
   */
  label: PropTypes.string.isRequired,
  /**
   * Optional click handler
   */
  onClick: PropTypes.func,
};

Boton.defaultProps = {
  backgroundColor: null,
  type:'button',
  primary: 'primary',
  size: 'medium',
  onClick: undefined,
};
