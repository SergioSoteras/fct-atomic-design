import React from "react";

import logo from '../../assets/logo-ntt.png';
import './logo.css';

export const Logo = () => {
    return (
    <div className="logo">
        <img src={logo} className='img-fluid' alt='NTT DATA'/>        
    </div>
    )
}