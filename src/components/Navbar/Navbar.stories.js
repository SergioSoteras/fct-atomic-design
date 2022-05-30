import React from "react";
import { Navbar } from "./Navbar";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Navbar',
    component: Navbar,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Navbar {...args} />;

export const NavbarItems = Template.bind({});
NavbarItems.args = {
    navitems:['navitem1','navitem2','navitem3','navitem4']
}

export const NavbarBotton = Template.bind({});
NavbarBotton.args = {
    navitems:['navitem1','navitem2','navitem3','navitem4'],
    button:'Test',
}