import React, { Component } from 'react';
// import { Alert } from 'react-bootstrap';
import { Alert } from 'reactstrap';
import store from '../../store';
class customAlert extends Component {
  constructor(props) {
    super(props);
    this.state = {
      visible: false,
    };
  }
  componentDidMount() {
    this.setState({ visible: true }, () => {
      window.setTimeout(() => {
        this.setState({ visible: false });
        const scr = store.getState().scr;
        const grid = store.getState().grid;
        const client = store.getState().client;
        const roles = store.getState().roles;
        const pm = store.getState().pm;
        scr.message = '';
        scr.editSubContractor.message = '';
        scr.deleteSubContractor.message = '';
        grid.gridAdd.message = '';
        grid.deleteGrid.message = '';
        grid.editGrid.message = '';
        grid.cgAdd.message = '';
        grid.gridAdd.layerUpdateMsg = '';
        client.isSuccess = false;
        client.isError = false;
        client.message = '';
        roles.updatePage.message = '';
        pm.approveLayer.message = '';
      }, 5000);
    });
  }

  render() {
    return (
      <Alert
        color={this.props.variant}
        isOpen={this.state.visible}
        className="alert"
      >
        {this.props.message}
      </Alert>
    );
  }
}

export default customAlert;
