import React from 'react';

import { Card } from './Card';

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
  title: 'Card',
  component: Card,
  // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  argTypes: {
    backgroundColor: { control: 'color' },
  },
};

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Card {...args} />;

export const Test = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
Test.args = {
  modelo: 'Kespor K7',
  imagen: 'https://www.canyon.com/on/demandware.static/-/Sites-canyon-master/default/dw65b7dc15/images/full/full_2021_/2021/full_2021_grand-canyon-6_2615_bk-gy_P5.png',
  precio: '299.99 €',
};

export const noArgs = Template.bind({});
