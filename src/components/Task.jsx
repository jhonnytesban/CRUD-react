import React, { Fragment } from "react";

const Task = ({ el, setTask, task }) => {

  const handleDelete = () => {
    let newArray = task.filter(element => element !== el )
    setTask(newArray)
    localStorage.setItem('Registros', JSON.stringify(newArray))
  };

  return (
    <Fragment>
      <tr>
        <td>{el}</td>
        <td>
          <button onClick={handleDelete}>Eliminar</button>
        </td>
      </tr>
    </Fragment>
  );
};

export default Task;
