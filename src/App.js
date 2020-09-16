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
import ViewGridDpr from './container/grid/viewGridDprContainer';
import GridDetails from './pages/gridDetails/GridDetails';
import EditDridDetails from './pages/editGridDetails/EditGridDetails';
import DeleteGrid from './container/grid/deleteGridContainer';
import EditGrid from './container/grid/editGridContainer';
// import ClientBilling from './pages/clientBilling/ClientBilling';
import SubContractor from './container/subContractor/SubContractorContainer';
import EditSubContractor from './container/subContractor/editSubContractorContainer';
import ListSubContractor from './container/subContractor/ListSubContractorContainer';
import CreateUser from './container/userManagement/createUserContainer';
import ClientBilling from './container/clientBilling/clientBillingContainer';
import ListUser from "./container/userManagement/listUserContainer";

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
        <Route exact path="/listsubcontractor">
          <ListSubContractor />
        </Route>
        <Route exact path="/editsubcontractor">
          <EditSubContractor />
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
        <Route path="/deletegrid">
          <DeleteGrid />
        </Route>
        <Route path="/editgrid">
          <EditGrid />
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
        <Route path="/users">
          <ListUser />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
