import React from "react";
import { Dropdown } from "./Dropdown";

export default {
    title: 'Dropdown',
    component: Dropdown,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Dropdown {...args} />;

export const Menu = Template.bind({});

Menu.args = {
    titulo: 'Dropdown',
    menu: ['opcion1','opcion2','opcion3'],
}