import React from 'react';
import PropTypes from 'prop-types';
import { Boton } from '../Boton/Boton';
import { Icon } from '../Icon/Icon';
import { Input } from '../Input/Input';

import './search.css';

export const Search = (props) => {
  return (
    <div className='searchform'>
        <form onSubmit={props.onSubmit}>
        <Input size='30' placeholder='   Introduce búsqueda...'/>
        <Boton label='' type='submit' size='small'><Icon name='magnifying-glass' animation='shake'/></Boton>
        </form> 
    </div>
  )
}

Search.propTypes = {
    onSubmit: PropTypes.func,
};

Search.defaultProps = {
  onSubmit: undefined,
};
