import React, { Fragment, useState } from "react";
import '../styles/Login.css';

const Login = () => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <Fragment>
      <div className="login-container">
        <h1 className="title__login">Login</h1>
        <form className="form__login" onSubmit={handleSubmit}>
          <input
            className="form__input"
            placeholder="Escribe el email"
            type="email"
            name="email"
            onChange={handleChange}
          />
          <input
            className="form__input"
            placeholder="Escribe la contraseña"
            type="password"
            name="password"
            onChange={handleChange}
          />
          <input type="submit" value="Registrarse" />
        </form>
      </div>
    </Fragment>
  );
};

export default Login;
