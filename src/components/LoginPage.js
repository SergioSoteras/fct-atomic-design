import React, { useState } from "react";
import { Boton } from "./Boton/Boton";
import { Input } from "./Input/Input";
import { Logo } from "./Logo/Logo";

import './loginPage.css'


const LoginPage = () => {
    const [logged, setLogged] = useState(false);
    const [user, setUser] = useState('');
    const [pass, setPass] = useState('');

    const handleInputUser = (e)=>{
        setUser(e.target.value);
    }
    const handleInputPass = (e)=>{
        setPass(e.target.value);
    }
    const handleLogin = (e) => {
        console.log(user);
        console.log(pass);
        setLogged(true);
    }
    const handleCancel = () => {
        setUser('');
        setPass('');
        setLogged(false);
    }

  return (
       <div className="container fondo">
        <Logo/>
        {logged ? <div className="col-2">
                <p>Bienvenido {user} </p>
                <Boton label="Logout" onClick={handleCancel} primary="cancel" />
            </div>
        : <div className="col-2">
          <form className="formLogin">
          <Input
            onChange={handleInputUser}
            placeholder="  Escribe tu nombre de usuario..."
            size="40"
            label='Usuario: '
            value={user}       
          />
          <Input
            onChange={handleInputPass}
            placeholder="  Contraseña..."
            size="40"
            tipo="password"
            label='Contraseña: '
            value={pass}  
          />
          <Boton label="Login" onClick={handleLogin} type='submit'/>
          <Boton label="Reiniciar" onClick={handleCancel} primary="cancel" />
          </form>
        </div>}
    </div>
    
  );
};

export default LoginPage;
