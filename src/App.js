import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';

//Pages Import
import Login from './pages/Login';
import Dashboard from './pages/dashboard/Dashoard';
import GridDPR from './pages/gridDPR/GridDPR';
import CreateGrid from './pages/createGrid/CreateGrid';
import ViewGrid from './pages/viewGrid/ViewGrid';
import ViewGridDpr from './pages/viewGridDPR/ViewGridDpr';
// import GridDetails from './pages/gridDetails/GridDetails';
import EditDridDetails from './pages/editGridDetails/EditGridDetails';
import ClientBilling from './pages/clientBilling/ClientBilling';
import SubContractor from './container/subContractor/SubContractorContainer';

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
        <Route path="/viewgriddpr">
          <ViewGridDpr />
        </Route>
        {/* <Route path="/griddetails">
          <GridDetails />
        </Route> */}
        <Route path="/editgriddetails">
          <EditDridDetails />
        </Route>
        <Route path="/clientbilling">
          <ClientBilling />
        </Route>
        <Route path="/subcontractor">
          <SubContractor />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
