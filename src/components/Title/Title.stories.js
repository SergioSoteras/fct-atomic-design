import React from "react";
import { Title } from "./Title";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Title',
    component: Title,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Title {...args} />;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Default.args = {};

export const Texto = Template.bind({});
Texto.args = {
  titulo: 'Con titulo como Arg',
};