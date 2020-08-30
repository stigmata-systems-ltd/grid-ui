import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import './App.css';
import './assets/css/styles.css';

//Pages Import
import Login from "./pages/Login";
import Dashboard from "./pages/dashboard/Dashoard";
import GridDPR from "./pages/gridDPR/GridDPR";
import CreateGrid from "./pages/createGrid/CreateGrid";
import ViewGrid from "./pages/viewGrid/ViewGrid";
import ClientBilling from "./pages/clientBilling/ClientBilling";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route exact path="/login">
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
        <Route path="/viewgrid">
          <ViewGrid />
        </Route>
        <Route path="/clientbilling">
          <ClientBilling />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
