import React from 'react'
import { IconButton } from './IconButton';


export default{
    title:'IconButton',
    component:IconButton,
}

const Template = (args) => <IconButton {...args} />;

export const primario = Template.bind({});
primario.args = {
    name: 'close',
    primary: 'primary',
} 
export const secondary = Template.bind({});
secondary.args = {
    name: 'close',
    primary: 'secondary',
}  
export const cancel = Template.bind({});
cancel.args = {
    name: 'close',
    primary: 'cancel',
}

export const IconoSmall = Template.bind({});
IconoSmall.args = {
    name: 'close',
    size:'small,'
} 

export const IconoBig = Template.bind({});
IconoBig.args = {
    name: 'close',
    size:'big',
} 