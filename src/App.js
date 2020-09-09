import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';

//Pages Import
import Login from './container/auth/loginContainer';
import Dashboard from './pages/dashboard/Dashoard';
import GridDPR from './container/grid/gridDPRContainer';
import CreateGrid from './container/grid/addGridContainer';
import ViewGrid from './container/grid/viewGrid';
import ViewGridDpr from './pages/viewGridDPR/ViewGridDpr';
import GridDetails from './pages/gridDetails/GridDetails';
import EditDridDetails from './pages/editGridDetails/EditGridDetails';
import ClientBilling from './pages/clientBilling/ClientBilling';
import SubContractor from './container/subContractor/SubContractorContainer';
import CreateUser from './container/userManagement/createUserContainer';

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
        <Route exact path="/createuser">
          <CreateUser />
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
        <Route path="/griddetails">
          <GridDetails />
        </Route>
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
