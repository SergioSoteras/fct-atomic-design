import React from 'react'
import { Boton } from '../Boton/Boton'
import { Icon } from '../Icon/Icon'

export const IconButton = ({name,size,primary,label,...props}) => {
  return (
    <Boton primary={primary} label={label} {...props}>
        <Icon name={name} size={size} />
    </Boton>
  )
}

IconButton.defaultProps = {
  label: '',
}
