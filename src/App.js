import React, { Fragment, useState } from 'react';
import Form from './components/Form';
import List from './components/List';
import './styles/App.css';

function App() {

  const [data, setData] = useState([]);

  return (
    <Fragment>
      <header>
        <h1>To Do List (con Local Storage)</h1>
      </header>
      <Form 
        setData = {setData}
      />
      <List
        data = {data}
        setData={setData}
      />
    </Fragment>
  );
}

export default App;
