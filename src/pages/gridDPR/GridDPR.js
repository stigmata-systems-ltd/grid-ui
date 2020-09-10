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
    this.props.fetchLayerNoData();
    this.props.fetchSubContractorData();
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
                  selectOptions={this.props.grid.gridNoData}
                  onChange={e => this.props.handleGridNoChange(e.target.value)}
                  // value={this.state.selectedGrid}
                />
                <SimpleDropDown size="col-md-4"
                  label="Layer Number"
                  selectOptions={this.props.grid.LayerNoData}
                  onChange={e => this.props.handleLayerNoChange(e.target.value)}
                  // value={this.state.selectedLayer}
                />
                <DateInput size="col-md-4" label="Date of Filing" />
              </FormRow>
              <FormRow>
                <DateInput
                  label="Date of Filing"
                  onChange={e =>
                    this.props.handleDateOfFilingChange(e.target.value)
                  }
                />
                <TextInput
                  label="Area Of Layer (Sqm)"
                  onChange={e =>
                    this.props.handleAreaOfLayerChange(e.target.value)
                  }
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
              <AddQuantity
                subContractorList={this.props.grid.subContractorList}
                quantityChange={e =>
                  this.props.handleQuantityChange(e.target.value)
                }
                onSubContractorChange={e => {
                  console.log('SubContractor Change');
                  console.dir(e.target.options[e.target.selectedIndex].value);
                  this.props.handleSubContractorChange(e.target.value);
                }}
                quantityData={this.props.grid.addedQuantity}
                addQuantity={this.props.addQuantity}
                deleteQuantity={(index) => this.props.deleteQuantity(index)}
                editQuantity={(index) => this.props.editQuantity(index)}
                totalQuantity={this.props.grid.totalQuantity}
                totalSubContractor={this.props.grid.totalSubContractor}
                {...this.props.grid}
              />
              <FormRow>
                <TextInput
                  label="Fill Type"
                  onChange={e =>
                    this.props.handleFillTypeChange(e.target.value)
                  }
                />
                <TextInput
                  label="Top Level Fill Material"
                  onChange={e =>
                    this.props.handleTopLevelFillMaterialChange(e.target.value)
                  }
                />
              </FormRow>
              <FormRow>
                <CheckBox label="RFI Level Verification" />
                <CheckBox label="RFI Compaction Testing" />
              </FormRow>
              <FormRow>
                <TextInput
                  label="RFI Number"
                  onChange={e => this.props.handleRFILVChange(e.target.value)}
                />
                <TextInput
                  label="RFI Number"
                  onChange={e => this.props.handleRFICTChange(e.target.value)}
                />
              </FormRow>
              <FormRow>
                <DateInput
                  label="Inspection Date"
                  onChange={e =>
                    this.props.handleRFILVInspectionDateChange(e.target.value)
                  }
                />
                <DateInput
                  label="Inspection Date"
                  onChange={e =>
                    this.props.handleRFICTInspectionDateChange(e.target.value)
                  }
                />
              </FormRow>
              <FormRow>
                <DateInput
                  label="Approval Date"
                  onChange={e =>
                    this.props.handleRFILVApprovalDateChange(e.target.value)
                  }
                />
                <DateInput
                  label="Approval Date"
                  onChange={e =>
                    this.props.handleRFICTApprovalDateChange(e.target.value)
                  }
                />
              </FormRow>
              <FormRow>
                <SimpleDropDown
                  label="RFI Status (Approval)"
                  selectOptions={this.props.grid.approvalOptions}
                  onChange={e =>
                    this.props.handleRFILVApprovalStatusChange(e.target.value)
                  }
                  // value={this.state.selectedGrid}
                />
                <SimpleDropDown
                  label="RFI Status (Approval)"
                  selectOptions={this.props.grid.approvalOptions}
                  onChange={e =>
                    this.props.handleRFICTApprovalStatusChange(e.target.value)
                  }
                  // value={this.state.selectedGrid}
                />
              </FormRow>
              <FormRow>
                <TextArea
                  label="Material Description"
                  size="col-md-6"
                  onChange={e =>
                    this.props.handleMaterialDescriptionChange(e.target.value)
                  }
                />
                <FileInput
                  label="Select Documents"
                  onChange={e => this.props.handleFileUpload(e.target.files[0])}
                />
              </FormRow>
              <FormRow>
                <TextArea
                  label="Remarks"
                  size="col-md-12"
                  onChange={e => this.props.handleRemarksChange(e.target.value)}
                />
              </FormRow>

              <FormRow>
                <SimpleDropDown
                  label="Layer Status"
                  selectOptions={this.props.grid.approvalOptions}
                  onChange={e =>
                    this.props.handleLayerStatusChange(e.target.value)
                  }
                />
              </FormRow>
              <Button
                btnText="Save"
                btnType="primary"
                onClick={this.props.updateLayerProgress}
              />
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
