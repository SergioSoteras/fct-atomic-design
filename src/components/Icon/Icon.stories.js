import React from 'react';

import { Icon } from './Icon';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Icon',
  component: Icon,
  argTypes: {
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Icon {...args} />;

export const Normal = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Normal.args = {
  name: 'bicycle',
};

export const Pequeño = Template.bind({});
Pequeño.args = {
    name: 'bicycle',
    size: 'small'
};

export const Grande = Template.bind({});
Grande.args = {
    name: 'bicycle',
    size: 'big',
};

export const Animado = Template.bind({});
Animado.args = {
    name: 'bicycle',
    animation: 'beat',
};

