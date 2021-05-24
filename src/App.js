import React, { Fragment, useState } from "react";
import { BrowserRouter as Router, Switch, Route,} from "react-router-dom";
import Login from "./pages/Login";
import Todo from "./pages/Todo";
import "./styles/App.css";

function App() {
  const [data, setData] = useState([]);

  return (
    <Fragment>
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route path="/inicio">
            <Todo setData={setData} data={data} />
          </Route>
        </Switch>
      </Router>
    </Fragment>
  );
}

export default App;
