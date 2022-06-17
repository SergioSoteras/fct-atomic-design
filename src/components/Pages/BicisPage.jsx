import React from 'react'
import { Bloque } from '../Bloque/Bloque';

import '../templates/template.css'

const bicis = [{
    modelo: 'BMK-200',
    descripcion: 'Descripcion de la bici,Descripcion de la bici,Descripcion de la bici,Descripcion de la bici',
    precio: '459.99 €',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxZxtOoDnWe8fmD2QtE1STnd_pkpw_xvpaSQ&usqp=CAU',
  },
  {
    modelo: 'KESPOR K7',
    descripcion: 'La bicicleta plegable KESPOR K7 está diseñada con un marco de aluminio más duradero, freno de disco, un sistema de mecanismo de plegado fácil, mantiene el deporte fácil',
    precio: '499.00 €',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRZ4LY16aSPJwbJpdryDZA6pOCWK3JAU-TQsQ&usqp=CAU,'
  },
  {
    modelo: 'Magna FR',
    descripcion: 'Esta resistente bicicleta está equipada con frenos de tracción lineales delanteros y traseros, palanca de cambios de índice de 18 velocidades y un asiento acolchado.',
    precio: '399.99 €',
    imagen:'https://www.ubuy.vn/productimg/?image=aHR0cHM6Ly9tLm1lZGlhLWFtYXpvbi5jb20vaW1hZ2VzL0kvODFNd05DNkpxN0wuX0FDX1NMMTUwMF8uanBn.jpg',
  },
  {
    modelo: 'ZiZOFerro',
    descripcion: 'El Ferro cuenta con componentes Shimano originales con sus 7 velocidades que tienes mucho para moverte, frenos estilo V y un fuerte marco de acero de alta resistencia. El Ferro cuenta con componentes Shimano originales con sus 7 velocidades que tienes mucho para moverte, frenos estilo V y un fuerte marco de acero de alta resistencia. ',
    precio: '269.99 €',
    imagen: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTmLGYp6cm9WMJhtws9Kl8f0yXkcrML_-vFHg&usqp=CAU',
  },]

export const BicisPage = () => {
  return (
    <div className='bicis'>
        <Bloque titulo='Primera bici' boton='Mas info'>
            <p>Descripcion de la bici blablablabla
            <br/>Mas descripcion blabla</p>
            <p>Es free</p>
        </Bloque>
        <Bloque titulo='Segunda Bici' boton='Agotado'>
            <p>Descripcion de la segunda bicicleta...</p>
            <p>Descripcion de la segunda bicicleta...</p>
            <p>1450.69€ </p>
        </Bloque>
        { bicis.map(bici =>
        <Bloque key={bici.modelo} titulo={bici.modelo} boton='Más info' description={bici.descripcion} tamaño={bici.descripcion.length}>

            <p>{bici.precio}</p>
        </Bloque>
        )}
        </div>
  )
}
