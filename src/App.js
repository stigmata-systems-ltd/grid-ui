import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import './assets/css/styles.css';

//Pages Import
import Login from './container/auth/loginContainer';
import Dashboard from './container/dashboard/dashBoardContainer';
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
import PlaningManager from './container/planningManager/pmContainer';
import ListRoles from './container/roleManagement/listRoleContainer';
import EditRole from './container/roleManagement/editRoleContainer';
import Forgot from "./pages/auth/Forgot";
import Profile from "./container/userManagement/ProfileContainer";
import LayerMapReport from "./container/report/LayerMapReportContainer";

import ProtectedRoute from "./common/ProtectedRoute";
import AuthorizedRoute from "./common/AuthorizedRoute";
import unauthorized from "./common/Unauthorized";
import { setRespInterceptor, setAuthHeader } from "./utils/auth";
setAuthHeader();setRespInterceptor();
class App extends Component {

  // constructor() {
  //   super()
  //   setInterceptor();
  // }
  
  render() {
    return (
      <Router>
        <Switch>
          <Route exact path="/" component={Login} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/forgot" component={Forgot} />
          <ProtectedRoute exact path="/master/roles/list" component={ListRoles} />

          <ProtectedRoute exact path="/roles/edit" component={EditRole} />
          <ProtectedRoute
            exact
            path="/master/subcontractor/list"
            component={ListSubContractor}
          />
          <ProtectedRoute
            exact
            path="/subcontractor/edit"
            component={EditSubContractor}
          />
          <ProtectedRoute path="/dashboard" component={Dashboard} />
          <ProtectedRoute exact path="/grid/dpr" component={GridDPR} />
          <ProtectedRoute path="/grid/dpr/:id" component={GridDPR} />
          <ProtectedRoute path="/master/grid/create" component={CreateGrid} />
          <ProtectedRoute path="/deletegrid" component={DeleteGrid} />
          <ProtectedRoute path="/editgrid" component={EditGrid} />
          <ProtectedRoute path="/grid/view" component={ViewGrid} />
          <ProtectedRoute path="/viewgriddpr" component={ViewGridDpr} />
          <ProtectedRoute path="/griddetails" component={GridDetails} />
          <ProtectedRoute path="/editgriddetails" component={EditDridDetails} />
          <ProtectedRoute path="/clientbilling" component={ClientBilling} />
          <ProtectedRoute
            path="/master/subcontractor/create"
            component={SubContractor}
          />
          <ProtectedRoute path="/master/users" component={ListUser} />
          <ProtectedRoute
            exact
            path="/report/master"
            component={MasterReport}
          />
          <ProtectedRoute
            exact
            path="/report/subcontractor"
            component={SubContractorReport}
          />
          <AuthorizedRoute path="/profile" component={Profile} />
          <AuthorizedRoute path="/report/map" component={LayerMapReport} />
          <ProtectedRoute path="/planingmanager" component={PlaningManager} />
          <Route exact path="/unauthorized" component={unauthorized} />
        </Switch>
      </Router>
    );
  }
}

export default App;
