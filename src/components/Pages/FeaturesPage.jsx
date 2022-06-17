import React from 'react'
import { Bloque } from '../Bloque/Bloque';
import { Feature } from '../Feature/Feature';

import '../templates/template.css'

export const FeaturesPage = () => {
  return (<div>
    <Feature img='https://www.santafixie.com/blog/wp-content/uploads/2020/09/niss-bike-9_1427885375_1427885381-920x470.jpg'>
          <Bloque titulo='Probando feature con img de arg' boton='Learn More' className='glassmor'>
            <p>Una simple prueba para ver si sale una la imagen que he puesto de fondo</p>
          </Bloque>
        </Feature>
        <Feature>
          <Bloque titulo='Probando feature default' boton='Learn More' className='glassmor'>
            <p>Una simple prueba para ver si sale la imagen de fondo default</p>
          </Bloque>
        </Feature>
        </div>)
}
