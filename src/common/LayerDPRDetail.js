import React, { Component } from 'react';
import Button from './forms/Button';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import LayerViewModel from '../pages/viewGridDPR/LayerViewModel';
import IconTextButton from './forms/IconTextButton';
import LayerDPRViewModel from './LayerDPRViewModel';
import FormRow from './forms/FormRow';
import LayerDPRViewDataTable from './LayerDPRViewDataTable';
import TextInput from './forms/TextInput';

class LayerDPRDetail extends Component {
  constructor() {
    super();
    this.state = {
      showLayerViewModal: false,
    };
  }
  renderTableHeaders = () => {
    return this.props.metaData.map(header => <th><p>{header}</p></th>);
  };


  handleLayerViewModalClose = () => {
    this.setState({ showLayerViewModal: false });
  };
  showLayerViewModal = () => {
    this.setState({ showLayerViewModal: true });
  };

  render() {
    return (
      <div class="table-responsive pt-4 data-table ">
        <table class="table table-bordered ">
          <thead >
            <tr>{this.renderTableHeaders()}</tr>
          </thead>
          <tbody>
            {this.props.bodyData.map(data => {
              return (
                <tr>
                  {Object.keys(data).map(key => (
                    <>
                      <td> {data[key].toString()}</td>
                    </>
                  ))}
                  <td class="action-btns">
                    <IconTextButton btnText="View" onClick={this.showLayerViewModal} />
                    <Link to="/griddpr" className="btn btn-secondary">Edit</Link>
                  </td>

                </tr>
              );
            })}
          </tbody>
        </table>

        {/* Layer DPR View Model */}

        <LayerDPRViewModel
          showModal={this.state.showLayerViewModal}
          handleClose={this.handleLayerViewModalClose}
          size="lg"
          title="View Layer DPR Details"
        >

          <FormRow>
            <TextInput label="Grid Number" />
            <TextInput label="Layer Number" />
          </FormRow>
          <FormRow>
            <TextInput label="Date of Filing" />
            <TextInput label="Area Of Layer (Sqm)" />
          </FormRow>
          <FormRow>
            <TextInput label="Top Level Fill Metrials" />
            <TextInput label="Meterial Description" />
          </FormRow>
          <FormRow>
            <LayerDPRViewDataTable />

          </FormRow>
        </LayerDPRViewModel>
      </div>

    );
  }
}

export default LayerDPRDetail;
