import React from 'react'
import { Icon } from '../Icon/Icon';
import './dropdown.css';

export const Dropdown = (props) => {
  return (
    <div className='dropdown'>
        <button className="dropbtn">{props.titulo} <Icon name='caret-down'/></button>
        <div className="dropdown-content">
            {props.menu.map(opcion =>
            <a key={opcion} >{opcion}</a>)}       
        </div>
    </div>
  )
}
