import React from 'react'
import PropTypes from 'prop-types';
import './input.css';

export const Input = ({label, tipo, size, placeholder,children, ...props}) => {
  return (
    <>
    <label>{label}</label>
    <input 
        type={tipo}
        size={size}
        className={['input', `input-${tipo}`].join(' ')}
        placeholder={placeholder}
        {...props} />{children}
    
    </>
  )
}

Input.propTypes = {
    /**
     * Is this the principal call to action on the page?
     */
    tipo: PropTypes.string.isRequired,
    /**
     * How large should the input be?
     */
    size: PropTypes.string ,
    /**
     * Input contents
     */
    label: PropTypes.string,
    placeholder: PropTypes.string,
    /**
     * Optional click handler
     */
    onChange: PropTypes.func,
  };
  
  Input.defaultProps = {
    tipo: 'text',
    size: '50',
    placeholder: 'Ejemplo',
    onChange: undefined,
  };
  