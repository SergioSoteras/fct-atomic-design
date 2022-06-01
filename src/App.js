import React, { useState } from 'react'
import { Hr } from './components/atoms/HorinzontalRule/Hr';
import { Bloque } from './components/Bloque/Bloque';
import { Boton } from './components/Boton/Boton';
import { Card } from './components/Card/Card';
import { Feature } from './components/Feature/Feature';
import { Footer } from './components/Footer/Footer';
import { Icon } from './components/Icon/Icon';
import { Input } from './components/Input/Input';
import LoginPage from './components/LoginPage';
import { Modal } from './components/Modal/Modal';
import { Navbar } from './components/Navbar/Navbar';

import './components/templates/template.css'
import { Title } from './components/Title/Title';

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
const App = () => {
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);

  const handleLogin = () => {
    setLogin(login => !login);
    console.log(login);
  }
  return (<>
    <Navbar navitems={['Home','Catalogo','Contacto']}><Boton label='LOGIN' onClick={handleLogin}></Boton></Navbar>
    <div className='container'>
        <h1><center>Tema con Atomic Desing</center></h1>
        {login && <LoginPage/>}
        <Hr style={5} /><h3>Catálogo de nuestras bicicletas: </h3>
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
    
    <div className='bicisDos'>
    { bicis.map (bici =>
    <Card key={bici.modelo} modelo={bici.modelo} precio={bici.precio} imagen={bici.imagen} description={bici.descripcion}/>
      )}
    </div>
    <Hr style={2} />
    <div>
      <Title titulo='Prueba de inputs checkbox y radio'/>
      <Input tipo='checkbox' label='Opcion1'>Opcion1</Input>
      <Input tipo='radio' name='test' >Opcion1</Input>
      <Input tipo='radio' name='test' >Opcion2</Input>
      <Input tipo='radio' name='test' >Opcion3</Input>
    </div>
    <Hr style={3} />
    <Icon name='square-check' size='big' onClick={() => setModal(modal => !modal)}/>Check para ver el modal
    </div>
    <Footer />

    {modal && <Modal onClick={() => setModal(modal => !modal)}>
      <h3>Prueba de Children de Modal</h3>
      <p>Dale al boton [ X ] o al fondo azul para cerrar</p></Modal>}
    </>
  )
}

export default App;