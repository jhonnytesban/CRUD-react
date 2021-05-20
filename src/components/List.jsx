import React, { Fragment, useState, useEffect } from "react";
import { get } from "../services/services";
import { v4 as uuidv4 } from "uuid";
import "../styles/List.css";
import Task from "./Task";

const List = ({ data, setData }) => {
  const [task, setTask] = useState([]);

  useEffect(() => {
    let registros = get();
    if (registros === undefined) {
      return;
    } else {
      setTask(registros);
    }
  }, [data]);

  return (
    <Fragment>
      <h2>Lista de Tareas</h2>
      <ul>
        {task.length === 0 ? (
          <li>No hay datos</li>
        ) : (
          task.map((el) => (
            <Task key={uuidv4()} el={el} setTask={setTask} task={task} />
          ))
        )}
      </ul>
    </Fragment>
  );
};

export default List;
