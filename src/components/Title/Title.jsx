import React from 'react'
import PropTypes from 'prop-types';
import './title.css';

export const Title = ({titulo,}) => {
    return (
        <h1 className='title'>{titulo}</h1>
    )
}
Title.propTypes = {
    titulo: PropTypes.string,
}

Title.defaultProps = {
    titulo: 'Titulo',
};