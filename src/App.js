import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './assets/css/styles.css';
import Dashboard from "./pages/dashboard/Dashoard";
import GridDPR from "./pages/gridDPR/GridDPR";
import Login from "./pages/Login";
import CreateGrid from "./pages/createGrid/CreateGrid";
function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/dashboard">
          <Dashboard />
        </Route>
        <Route path="/griddpr">
          <GridDPR />
        </Route>
        <Route path="/creategrid">
          <CreateGrid />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
