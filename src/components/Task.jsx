import React, { Fragment } from "react";
import '../styles/Task.css';

const Task = ({ el, setTask, task }) => {

  const handleDelete = () => {
    let newArray = task.filter(element => element !== el )
    setTask(newArray)
    localStorage.setItem('Registros', JSON.stringify(newArray))
  };

  return (
    <Fragment>
      <li className="list">
        <p>{el}</p>
        <button className="list__btn" onClick={handleDelete}>Eliminar</button>
      </li>
    </Fragment>
  );
};

export default Task;
