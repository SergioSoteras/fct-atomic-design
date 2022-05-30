import React from 'react';
import { Brand } from '../Icon/Icon';

import './footer.css';

export const Footer = () => {
  return (
    <div className='footer'>
        
         <div className='footer-social'> 
            <a className='white' href='http://www.instagram.com' target="_blank">
                <Brand name='instagram' size='big'/></a>
            <a className='white' href='http://www.facebook.com' target="_blank">
                <Brand name='facebook' size='big'/></a>
            <a className='white' href='http://www.twitter.com' target="_blank">
                <Brand name='twitter' size='big'/></a>
        </div>
        <div className='footer-col1'>Politica de privacidad</div>
        <div className='footer-col2'>Sobre Nosotros...</div>
        <span>Copyrigth © 2022</span>
        
    </div>
  )
}
