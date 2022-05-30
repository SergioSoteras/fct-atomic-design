import React from 'react'
import { IconButton } from '../IconButton/IconButton'



import './modal.css'

export const Modal = (props) => {
    // const [modalVisible, setmodalVisible] = useState(true);

    // const handleModalVisible = () => {
    //     setmodalVisible(modalVisible => !modalVisible);
    // }

  return (<>
    
    <div className='modal-fondo'onClick={props.onClick}/>
    <div className='modal-ppal'>
            {props.children}
            <IconButton name='close' size='big' onClick={props.onClick}/>
    </div>
    </>
  )
}
