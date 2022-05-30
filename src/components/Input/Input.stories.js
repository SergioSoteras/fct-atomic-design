import React from "react";
import { Input } from "./Input";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Input',
    component: Input,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Input {...args} />;

export const Text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Text.args = {
  tipo: 'text',
  size: '40',
  placeholder: 'Escribe tu nombre de usuario...',
};

export const Password = Template.bind({});
Password.args = {
  tipo: 'password',
  size: '35',
  placeholder: 'Contraseña...',
};


