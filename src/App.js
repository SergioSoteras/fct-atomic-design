import React, { useState } from "react";
import { Hr } from "./components/atoms/HorinzontalRule/Hr";
import { Boton } from "./components/Boton/Boton";
import { Footer } from "./components/Footer/Footer";
import { Icon } from "./components/Icon/Icon";
import { Input } from "./components/Input/Input";
import LoginPage from "./components/LoginPage";
import { Modal } from "./components/Modal/Modal";
import { Navbar } from "./components/Navbar/Navbar";
import { Title } from "./components/Title/Title";
import "./components/templates/template.css";
import { FeaturesPage } from "./components/Pages/FeaturesPage";
import { BicisPage } from "./components/Pages/BicisPage";
import { BicisPageDos } from "./components/Pages/BicisPageDos";

const App = () => {
  const [login, setLogin] = useState(false);
  const [modal, setModal] = useState(false);

  const handleLogin = () => {
    setLogin((login) => !login);
    console.log(login);
  };
  return (
    <>
      <Navbar navitems={["Home", "Catalogo", "Contacto"]}>
        <Boton label="LOGIN" onClick={handleLogin}></Boton>
      </Navbar>

      <div className="container">
        <h1>
          <center>Tema con Atomic Desing</center>
        </h1>
        {login && <LoginPage />}
        <Hr tipo="5" />
        <h3>Catálogo de nuestras bicicletas: </h3>
        <BicisPage />
        <FeaturesPage />
        <BicisPageDos />
        <Hr tipo="2" />
        <div>
          <Title titulo="Prueba de inputs checkbox y radio" />
          <Input tipo="checkbox" label="Opcion1">
            <span>Opcion1</span>
          </Input>
          <Input tipo="radio" name="test">
            <span>Opcion1</span>
          </Input>
          <Input tipo="radio" name="test">
            <span>Opcion2</span>
          </Input>
          <Input tipo="radio" name="test">
            <span>Opcion3</span>
          </Input>
        </div>
        <Hr tipo="3" />
        <Icon
          name="square-check"
          size="big"
          onClick={() => setModal((modal) => !modal)}
        />
        Check para ver el modal
        <Hr tipo="3" />
      </div>
      <Footer />

      {modal && (
        <Modal onClick={() => setModal((modal) => !modal)}>
          <h3>Prueba de Children de Modal</h3>
          <p>Dale al boton [ X ] o al fondo azul para cerrar</p>
        </Modal>
      )}
    </>
  );
};

export default App;
