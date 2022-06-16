import React from 'react'
import { Card } from '../Card/Card'

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
export const BicisPageDos = () => {
  return (
    <div className='bicisDos'>
    { bicis.map (bici =>
    <Card key={bici.modelo} modelo={bici.modelo} precio={bici.precio} imagen={bici.imagen} description={bici.descripcion}/>
      )}
    </div>
  )
}
