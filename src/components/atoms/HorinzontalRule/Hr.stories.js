import React from 'react'
import { Hr } from './Hr.js'

export default{
    title: 'Horizontal Rule(hr)',
    component: Hr,
}

const Template = (args) => <Hr {...args} />

export const Default = Template.bind({})
Default.args={
    style: '1'
}
export const Dashed = Template.bind({})
Dashed.args={
    style: '2'
}
export const Dotted = Template.bind({})
Dotted.args={
    style: '3'
}
export const Normal = Template.bind({})
Normal.args={
    style: '4' 
}
export const Fat = Template.bind({})
Fat.args={
    style: '5'
}
