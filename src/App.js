import React, { Component } from 'react';
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
import ListUser from './container/userManagement/listUserContainer';
//import { setCompletedLayer } from "./utils/test";
import MasterReport from './container/report/masterReportContainer';
import SubContractorReport from './container/report/subContractorReportContainer';
import PlaningManager from './pages/planingManager/PlaningManager';
import ListRoles from './container/roleManagement/listRoleContainer';
import EditRole from './container/roleManagement/editRoleContainer';
class App extends Component {
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/">
            <Login />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/roles/list">
            <ListRoles />
          </Route>
          <Route exact path="/roles/edit">
            <EditRole />
          </Route>
          <Route exact path="/subcontractor/list">
            <ListSubContractor />
          </Route>
          <Route exact path="/editsubcontractor">
            <EditSubContractor />
          </Route>

          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/grid/dpr">
            <GridDPR />
          </Route>
          <Route path="/grid/create">
            <CreateGrid />
          </Route>
          <Route path="/deletegrid">
            <DeleteGrid />
          </Route>
          <Route path="/editgrid">
            <EditGrid />
          </Route>
          <Route path="/grid/view">
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
          <Route exact path="/report/master">
            <MasterReport />
          </Route>
          <Route exact path="/report/subcontractor">
            <SubContractorReport />
          </Route>
          <Route path="/planingmanager">
            <PlaningManager />
          </Route>
        </Switch>
      </Router>
    );
  }
}

export default App;
