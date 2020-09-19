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
        scr.message = '';
        scr.editSubContractor.message = '';
        scr.deleteSubContractor.message = '';
      }, 3000);
    });
  }

  render() {
    return (
      <Alert variant={this.props.variant} isOpen={this.state.visible}>
        {this.props.message}
      </Alert>
    );
  }
}

export default customAlert;
