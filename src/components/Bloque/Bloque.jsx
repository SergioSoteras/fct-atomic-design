import React from "react";
import PropTypes from 'prop-types';
import { Boton } from "../Boton/Boton";
import { Title } from "../Title/Title";

import './bloque.css';

export const Bloque = ({children,titulo,boton, className, description, tamaño}) => {
    const truncate = (string,tamaño,num) => {
        let newString;
        if (tamaño > num) {
            newString = string.substring(0, num-3)+'...';
            return newString;
        } else {
            newString = string
            return newString;
        }
    }

return (<div className={`container bloque ${className}`}>
        <Title titulo={titulo}></Title>
        <p>{truncate(description,tamaño,225)}</p>
        {children}
        <br/>{boton !== '' && <Boton label={boton}/>}
        </div>
    )
}

Bloque.propTypes = {
    titulo: PropTypes.string,
    boton: PropTypes.string,
    className: PropTypes.string,
    description: PropTypes.string,
}

Bloque.defaultProps = {
    titulo: 'Default',
    boton: '',
    className: '',
    description:'Descripcion de ejemplo...'
}