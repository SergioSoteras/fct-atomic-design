import React from "react";
import { Bloque } from "../Bloque/Bloque";
import { Feature } from "./Feature";

// More on default export: https://storybook.js.org/docs/react/writing-stories/introduction#default-export
export default {
    title: 'Feature',
    component: Feature,
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
  };
  
  // More on component templates: https://storybook.js.org/docs/react/writing-stories/introduction#using-args
  const Template = (args) => <Feature {...args} />;
  
  export const Default = (args) => <Feature />;

  export const DefaultBloque = (args) => (<Feature>
      <Bloque boton='Learn More' className='glassmor' description='Descripcionsiajdoiaf'/>
    </Feature>);

  export const Imagen = Template.bind({});
  Imagen.args = {
      img :'https://1.bp.blogspot.com/-qjhXttabk24/XphrGFyYdHI/AAAAAAAAGE8/uTDVNBVPfcs7-9mUKukYTVuC1aRk_LPFwCLcBGAsYHQ/s400/Eduardo%2BAranda.jpg'
    }

    export const ImgBloque = (args) => (<Feature img='https://i.blogs.es/a19bfc/testing/450_1000.jpg'>
      <Bloque boton='Learn More' className='glassmor' description='Descripcionsiajdoiaf'/>
    </Feature>);