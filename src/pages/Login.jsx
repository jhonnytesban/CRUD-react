import React, { Fragment, useState } from "react";

const Login = () => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {};
  const handleSubmit = (e) => {};

  return (
    <Fragment>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Escribe el email"
          type="email"
          name="email"
          onChange={handleChange}
        />
        <input
          placeholder="Escribe la contraseña"
          type="password"
          name="password"
          onChange={handleChange}
        />
        <input type="submit" value="Registrarse" />
      </form>
    </Fragment>
  );
};

export default Login;
