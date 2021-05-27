import React, { Fragment, useState } from "react";
import { auth } from '../firebaseconfig';
import { useHistory } from 'react-router-dom';
import '../styles/Login.css';

let initialForm = {
  email: '',
  pass: ''
}

const Login = () => {
  const history = useHistory()
  const [form, setForm] = useState(initialForm);

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    })
  };

  const registerUser = (e) => {
    e.preventDefault()
    if (form.email === '' || form.pass === '') {
      alert('Los campos están vacíos')
    } else {
      auth.createUserWithEmailAndPassword(form.email, form.pass)
        .then( res => {
          alert('Te has registrado')
          history.push('/inicio')
        })
      }
    };
    
    const initUser = (e) => {
      auth.signInWithEmailAndPassword(form.email, form.pass)
      .then( res => {
        alert('Has iniciado sesión')
        history.push('/inicio')
      })
      .catch( err => alert('Usuario no encontrado'))
  }

  return (
    <Fragment>
      <div className="login-container">
        <h1 className="title__login">Login</h1>
        <form className="form__login" >
          <input
            className="form__input"
            placeholder="Escribe el email"
            type="email"
            name="email"
            onChange={handleChange}
            value={form.email}
          />
          <input
            className="form__input"
            placeholder="Escribe la contraseña"
            type="password"
            name="pass"
            onChange={handleChange}
            value={form.pass}
          />
        </form>
        <input type="submit" value="Registrarse" onClick={registerUser}/>
        <input type="button" value="Iniciar Sesión" onClick={initUser}/>
      </div>
    </Fragment>
  );
};

export default Login;
