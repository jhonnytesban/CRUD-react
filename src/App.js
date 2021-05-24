import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './styles/App.css';

function App() {

  const [data, setData] = useState([]);

  return (
    <Fragment>
      <div className="container">
        <header>
          <h1 className="title-app">To Do List</h1>
        </header>
        <Form 
          setData = {setData}
        />
      </div>
      <List
        data = {data}
        setData={setData}
      />
    </Fragment>
  );
}

export default App;
