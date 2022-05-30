import React from "react";
import PropTypes from 'prop-types';

import './feature.css';

export const Feature = ({children, img}) => {
  return (
    <div className="container feature" style={{ backgroundImage: `url(${img})`}}>
        {children}
    </div>
  )
}

Feature.propTypes = {
    img: PropTypes.string,
    children: PropTypes.node,
}

Feature.defaultProps = {
    children: undefined,
    img: 'https://orangebikes.net/wp-content/uploads/2020/05/Mejores-Marcas-de-Bicicleta-del-Mundo-730x400.jpg',
  }
