import React, { Fragment } from 'react';
import Form from '../components/Form';
import List from '../components/List'

const Todo = ({setData, data}) => {
  return (
    <Fragment>
      <div className="container">
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