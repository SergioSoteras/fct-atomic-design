import React, { useState } from 'react'
import PropTypes from 'prop-types';
import { Boton } from '../Boton/Boton'
import { Title } from '../Title/Title'

import './card.css'
import { Icon } from '../Icon/Icon';

export const Card = (props) => {
    const [cardIsFlipped, setcardIsFlipped] = useState(false);

    const handleCardFlip = ()=>{
        setcardIsFlipped(cardIsFlipped => !cardIsFlipped);
    }
  return (<>
    
        {!cardIsFlipped ? <div className={`card front ${cardIsFlipped ? 'rotated' : ''}`}>
        <div className='cardHeader'><Title titulo={props.modelo}/></div>
        <div className='cardBody'>
            <img className='imgCard' src={props.imagen} alt={props.modelo}/>
            <span>{props.precio}</span>
        </div>
        <div className='cardFooter'>
            <Boton label='+Info ' onClick={handleCardFlip}><Icon name='bicycle'/></Boton>
            <Boton label='' primary='cancel' onClick={props.onClick}><Icon name='cart-plus' animation='beat'/></Boton>
        </div></div> : <div className={`card back ${cardIsFlipped ? 'rotated' : ''}`}>
        <div className='cardHeader'><Title titulo='Detalles'/></div>
        <div className='cardBody'>
            <p>{props.description}</p>
        </div>
        <div className='cardFooter'>
            <Boton label='Volver    ' onClick={handleCardFlip}><Icon name='arrows-rotate' animation='spin'/></Boton>
        </div></div>
        }
    </>
  )
}

Card.propTypes = {

    modelo: PropTypes.string,
    imagen: PropTypes.string,
    precio: PropTypes.string,
    description: PropTypes.string,
    onClick: PropTypes.func,
}

Card.defaultProps={
    modelo: 'Modelo',
    imagen:'https://www.santafixie.com/blog/wp-content/uploads/2020/09/niss-bike-9_1427885375_1427885381-920x470.jpg',
    precio:'Precio',
    description:'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ips...',
    onClick: undefined,
}