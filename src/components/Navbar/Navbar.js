import React, { useState } from 'react'
import { Boton } from '../Boton/Boton';
import { Dropdown } from '../Dropdown/Dropdown';
import { Logo } from '../Logo/Logo'
import { Search } from '../Search/Search';

import './navbar.css';

export const Navbar = ({navitems,button,children}) => {
  const [searchMode, setsearchMode] = useState(false);

  const handleSearchMode = ()=> {
      setsearchMode(searchMode => !searchMode)
  }

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#"><Logo/></a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className='navbar-nav me-auto mb-2'>
            {navitems.map(navitem =>
                <li key={navitem} className='nav-item'>
                    <a className="nav-link" href={`${navitem}`}>{navitem}</a>
                </li>)}
            <li className='nav-item'><Dropdown titulo='Bicicletas' menu={['Montaña','Carretera','Competición']}/></li>              
        </ul>
        <ul className="navbar-nav ml-auto">
              {searchMode &&  <li className='nav-item'><Search /></li>}
              <li className='nav-item'><Boton label='Search' primary='cancel' onClick={handleSearchMode}/></li>
              {button ? <li className='nav-item'><Boton label={button}/></li>:<li>{children}</li>}
        </ul>
        </div>
    </nav>
  )
}
