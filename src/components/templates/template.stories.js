import React from 'react';
import { storiesOf } from '@storybook/react';
import './template.css'

const defaultStyle = {
    outline: '1px solid #eee',
    backgroundColor: 'rgba(220, 220, 220, .6)',
    minHeight: '200px',
}
  storiesOf('default', module).add('default', () => (
    <div className='container' style={defaultStyle}>
      <nav className="navbar">Navbar</nav>
      <div className='bicis' style={defaultStyle}>
        <div className='bloque' style={defaultStyle}/>
        <div className='bloque' style={defaultStyle}/>
        <div className='bloque' style={defaultStyle}/>
        <div className='bloque' style={defaultStyle}/>
      </div>
      <div className='feature' style={defaultStyle}>
        <div className='bloque glass' style={defaultStyle}/>
      </div>
      <div className='bicisDos' style={defaultStyle}>
        <div className='card' style={defaultStyle}/>
        <div className='card' style={defaultStyle}/>
        <div className='card' style={defaultStyle}/>
        <div className='card' style={defaultStyle}/>
      </div>
      
    </div>
  ))