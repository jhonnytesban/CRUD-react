import React, { Fragment, useState } from "react";
import { save, get } from "../services/services";
import "../styles/Form.css";
import { TextField } from "@material-ui/core";

const Form = ({ setData }) => {
  const [form, setForm] = useState("");

  const handleChange = (e) => {
    setForm(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (form.length === 0) {
      alert("Los campos están vacíos");
    } else {
      save(form);
      let array = get();
      if (array === undefined) {
        return;
      } else {
        setData(array);
      }
      setForm("");
    }
  };

  return (
    <Fragment>
      <form className="form" onSubmit={handleSubmit}>
        {/* <input
          className="form__text"
          type="text"
          name="content"
          placeholder="Escribe la tarea"
          onChange={handleChange}
          value={form}
        /> */}
        <TextField
          id="standard-basic"
          label="Escribe la tarea"
          name="content"
          onChange={handleChange}
          value={form}
        />
        {/* <input type="submit" value="Añadir" className="btn" /> */}
      </form>
    </Fragment>
  );
};

export default Form;
