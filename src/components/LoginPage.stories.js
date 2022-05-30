import React from "react";
import LoginPage from "./LoginPage";


export default {
    title: 'LoginPage',
    component: LoginPage,
};

const Template = (args) => <LoginPage {...args} />

export const LoggedOut = Template.bind({})

export const LoggedIn = Template.bind({})