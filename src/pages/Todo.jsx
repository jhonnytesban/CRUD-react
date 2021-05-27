import React, { Fragment } from 'react';
import Form from '../components/Form';
import List from '../components/List';
import { auth } from '../firebaseconfig';
import { useHistory } from 'react-router-dom';

const Todo = ({setData, data}) => {

  const history = useHistory()

  const closeSesion = (e) => {
    auth.signOut()
    history.push('/')
  }

  return (
    <Fragment>
      <div className="container">
        <button onClick={closeSesion} >Cerrar Sesión</button>
        <header>
          <h1 className="title-app">To Do List</h1>
        </header>
        <Form setData={setData} />
      </div>
      <List data={data} setData={setData} />
    </Fragment>
  );
}
 
export default Todo;