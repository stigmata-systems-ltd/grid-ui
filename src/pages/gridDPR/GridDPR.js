import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import TabContent from '../../common/tabs/TabContent';
import TabPane from '../../common/tabs/TabPane';
import TabNavs from '../../common/tabs/TabNavs';

import { gridNumber, layers, tabMetaData, layerStsMeta, status, fillType, materialDescription } from './utils';
import Cleaning from './Cleaning';
import TextInput from '../../common/forms/TextInput';
import DateInput from '../../common/forms/DateInput';
import TextArea from '../../common/forms/TextArea';
import CheckBox from '../../common/forms/CheckBox';
import FileInput from '../../common/forms/FileInput';
import Button from '../../common/forms/Button';

import ProgressBar from 'react-bootstrap/ProgressBar';
import Photographs from './Photographs';
import Modal from '../../common/Modal';
import AddQuantity from './AddQuantity';

class GridDPR extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selectedGrid: 0,
      selectedLayer: 0,
      navData: tabMetaData,
      tabPaneStatus: [
        {
          id: 1,
          isActive: true,
        },
        {
          id: 2,
          isActive: false,
        },
        {
          id: 3,
          isActive: false,
        },
      ],
    };
  }
  handleGridSelection = val => {
    this.setState({ selectedGrid: val });
  };
  handleLayerSelection = val => {
    this.setState({ selectedLayer: val });
  };
  handleTabs = id => {
    this.setState({
      navData: this.state.navData.map(nav => {
        nav.id === id ? (nav['isActive'] = true) : (nav['isActive'] = false);
        return nav;
      }),
    });
    this.setState({
      tabPaneStatus: this.state.tabPaneStatus.map(tab => {
        tab.id === id ? (tab['isActive'] = true) : (tab['isActive'] = false);
        return tab;
      }),
    });
  };

  componentDidMount() {
    this.props.fetchGridNoData();
  }

  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Grid Daily Progress'}>
          <TabNavs
            navItems={this.state.navData}
            onClick={id => this.handleTabs(id)}
          />
          <TabContent>
            <TabPane isActive={this.state.tabPaneStatus[0].isActive}>
              <Cleaning
                gridNoData={this.props.grid.gridNoData}
                approvalOptions={this.props.grid.approvalOptions}
                onGridNoChange={e =>
                  this.props.handleGridNoChange(e.target.value)
                }
                onapprovalChange={e =>
                  this.props.handleApprovalChange(e.target.value)
                }
                onRFINoChange={e =>
                  this.props.handleRFINoChange(e.target.value)
                }
                onInspectionDateChange={e =>
                  this.props.handleInspectionDateChange(e.target.value)
                }
                onApprovalDateChange={e =>
                  this.props.handleApprovalDateChange(e.target.value)
                }
                addCGData={this.props.addCGData}
              />
            </TabPane>
            <TabPane isActive={this.state.tabPaneStatus[1].isActive}>
              <FormRow>
                <SimpleDropDown size="col-md-4"
                  label="Grid Number"
                  selectOptions={gridNumber}
                // onChange={this.handleGridSelection}
                // value={this.state.selectedGrid}
                />
                <SimpleDropDown size="col-md-4"
                  label="Layer Number"
                  selectOptions={layers}
                // onChange={this.handleLayerSelection}
                // value={this.state.selectedLayer}
                />
                <DateInput size="col-md-4" label="Date of Filing" />
              </FormRow>
              <FormRow>

                <TextInput size="col-md-4" label="Area Of Layer (Sqm)" />
                <SimpleDropDown size="col-md-4"
                  label="Fill Type"
                  selectOptions={fillType}
                // onChange={this.handleGridSelection}
                // value={this.state.selectedGrid}
                />
                <SimpleDropDown size="col-md-4" 
                label="Material Descrip.." 
                selectOptions={materialDescription} />
              </FormRow>

              <FormRow>

                <TextInput size="col-md-4" label="Top Level Fill Material" />
                <FileInput size="col-md-4" label="Select Documents" />
                <SimpleDropDown size="col-md-4"
                  label="Layer Status"
                  selectOptions={layerStsMeta}
                  // onChange={this.handleLayerSelection}
                  // value={this.state.selectedLayer}
                />

              </FormRow>

              <FormRow>
                <div class="col-md-12">
                  <div class="form-group row">
                    <div class="col-sm-12">
                      <h5>Completed Layers: 5</h5>
                    </div>
                    <div class="col-sm-12">
                      <ProgressBar now={33} />
                    </div>
                  </div>
                </div>
              </FormRow>
              {/* ADD QUANTITY COMPONENT */}
              <AddQuantity />

              <FormRow>
                <CheckBox label="RFI Level Verification" />
                <CheckBox label="RFI Compaction Testing" />
              </FormRow>
              <FormRow>
                <TextInput label="RFI Number" />
                <TextInput label="RFI Number" />
              </FormRow>
              <FormRow>
                <DateInput label="Inspection Date" />
                <DateInput label="Inspection Date" />
              </FormRow>
              <FormRow>
                <DateInput label="Approval Date" />
                <DateInput label="Approval Date" />
              </FormRow>
              <FormRow>
                <SimpleDropDown
                  label="RFI Status (Approval)"
                  selectOptions={status}
                // onChange={this.handleGridSelection}
                // value={this.state.selectedGrid}
                />
                <SimpleDropDown
                  label="RFI Status (Approval)"
                  selectOptions={status}
                // onChange={this.handleGridSelection}
                // value={this.state.selectedGrid}
                />
              </FormRow>

              <FormRow>
                <TextArea label="Remarks" size="col-md-12" />
              </FormRow>

              <Button btnText="Save" btnType="primary" />
              <Button btnText="Cancel" btnType="cancel" />
            </TabPane>
            {/* Cleaning Tab */}

            <TabPane isActive={this.state.tabPaneStatus[2].isActive}>
              <Photographs />
            </TabPane>
          </TabContent>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default GridDPR;
