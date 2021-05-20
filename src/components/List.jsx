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
      <table>
        <thead>
          <tr>
            <th>Tarea</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          {task === undefined ? (
            <tr>
              <td colSpan="2">No hay datos</td>
            </tr>
          ) : (
            task.map((el) => (
              <Task
                key={uuidv4()}
                el={el}
                setTask={setTask}
                task={task}
              />
            ))
          )}
        </tbody>
      </table>
    </Fragment>
  );
};

export default List;
