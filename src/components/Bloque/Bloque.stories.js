import React from "react";
import { Bloque } from "./Bloque";


// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Bloque',
    component: Bloque,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };

// More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
const Template = (args) => <Bloque {...args}><p>Test</p></Bloque>;

export const Default = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args

export const ConTitulo = Template.bind({});
ConTitulo.args = {
    titulo: 'Prueba de titulo',
}
export const ConBoton = Template.bind({});
ConBoton.args = {
    boton: 'Prueba de boton',
}
export const ConTituloyBoton = Template.bind({});
ConTituloyBoton.args = {
    titulo: 'Ambos args',
    boton: 'Mas info',
}

