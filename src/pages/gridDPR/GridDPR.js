import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import TabContent from '../../common/tabs/TabContent';
import TabPane from '../../common/tabs/TabPane';
import TabNavs from '../../common/tabs/TabNavs';
import Cleaning from './Cleaning';
import TextInput from '../../common/forms/TextInput';
import DateInput from '../../common/forms/DateInput';
import TextArea from '../../common/forms/TextArea';
import CheckBox from '../../common/forms/CheckBox';
import FileInput from '../../common/forms/FileInput';
import Button from '../../common/forms/Button';
import ProgressBar from 'react-bootstrap/ProgressBar';
import Photographs from './Photographs';
import AddQuantity from './AddQuantity';
import Loader from '../../common/Loader';
import CustomAlert from '../../common/forms/customAlert';
import SearchableDropDown from '../../common/forms/SearchableDropDown';
import {
  tabMetaData,
  fillTypeMetaData,
  materialDescMetaData,
  calcProgress,
  transformLayerList,
  layerDropDownMeta,
} from './utils';
import { transformGridList } from '../../utils/dataTransformer';

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
      LVCheckBox: false,
      CTCheckBox: false,
      enableCT: true,
      enableLV: true,
    };
  }

  CTChange = () => {
    this.setState({ CTCheckBox: !this.state.CTCheckBox });
    this.setState({ enableCT: !this.state.enableCT });
  };

  LVChange = () => {
    this.setState({ LVCheckBox: !this.state.LVCheckBox });
    this.setState({ enableLV: !this.state.enableLV });
  };

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
    this.props.setInitialData();
  }

  render() {
    return (
      <>
        {this.props.grid.isLayerDtlsLoading && <Loader />}
        <ContentLoader>
          <FormContainer formTitle={'Grid Daily Progress'}>
            <div>
              {(this.props.grid.isLayerUpdateSuccess ||
                this.props.grid.isLayerUpdateError) &&
              this.props.grid.gridAdd.layerUpdateMsg ? (
                <CustomAlert
                  variant={
                    this.props.grid.isLayerUpdateSuccess ? 'success' : 'danger'
                  }
                  message={this.props.grid.gridAdd.layerUpdateMsg}
                />
              ) : null}
            </div>

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
                  cancelCGData={this.props.cancelCGData}
                  gridNumber={this.props.grid.gridNo}
                  RFINumber={this.props.grid.RFINumber}
                  RFIApproval={this.props.grid.rfiApproval}
                  rfiInspectionDate={this.props.grid.rfiInspectionDate}
                  rfiApprovalDate={this.props.grid.rfiApprovalDate}
                  message={this.props.grid.cgAdd.message}
                  variant={this.props.grid.variant}
                />
              </TabPane>
              <TabPane isActive={this.state.tabPaneStatus[1].isActive}>
                <FormRow>
                  <SearchableDropDown
                    size="col-md-4"
                    label="Grid Number"
                    selectOptions={transformGridList(
                      this.props.grid.gridNoData
                    )}
                    onChange={value => this.props.handleGridNoChangeDPR(value)}
                    value={this.props.grid.dprGridNum}
                  />
                  <SearchableDropDown
                    label="Layer Number"
                    size="col-md-4"
                    selectOptions={transformLayerList(
                      this.props.grid.LayerNoData
                    )}
                    onChange={value => this.props.handleLayerNoChange(value)}
                    value={this.props.grid.layerNo}
                  />
                  <DateInput
                    size="col-md-4"
                    label="Date of Filing"
                    onChange={e =>
                      this.props.handleDateOfFilingChange(e.target.value)
                    }
                    value={this.props.grid.dateOfFiling}
                  />
                </FormRow>
                <FormRow>
                  <TextInput
                    size="col-md-4"
                    label="Area Of Layer (Sqm)"
                    onChange={e =>
                      this.props.handleAreaOfLayerChange(e.target.value)
                    }
                    value={this.props.grid.areaOfLayer}
                  />

                  <SimpleDropDown
                    size="col-md-4"
                    label="Fill Type"
                    selectOptions={fillTypeMetaData}
                    onChange={e =>
                      this.props.handleFillTypeChange(e.target.value)
                    }
                    value={this.props.grid.fillType}
                  />
                  <SimpleDropDown
                    size="col-md-4"
                    label="Material Descrip.."
                    selectOptions={materialDescMetaData}
                    onChange={e =>
                      this.props.handleMaterialDescriptionChange(e.target.value)
                    }
                    value={this.props.grid.rfiMaterialDescription}
                  />
                </FormRow>
                <FormRow>
                  <TextInput
                    size="col-md-4"
                    label="Top Level Fill Material"
                    onChange={e =>
                      this.props.handleTopLevelFillMaterialChange(
                        e.target.value
                      )
                    }
                    value={this.props.grid.fillMaterial}
                  />
                  <FileInput
                    size="col-md-4"
                    label="Select Documents"
                    onChange={e =>
                      this.props.handleFileUpload(e.target.files[0])
                    }
                  />
                </FormRow>
                <FormRow>
                  <div class="col-md-12">
                    <div class="form-group row">
                      <div class="col-sm-12">
                        <h5>
                          Completed Layers:
                          <span className="text-primary">
                            {this.props.grid.dprCompletedLayers}
                          </span>
                        </h5>
                      </div>
                      <div class="col-sm-12">
                        <ProgressBar
                          now={calcProgress(this.props.grid.dprCompletedLayers)}
                        />
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
                  onSubContractorChange={obj => {
                    this.props.handleSubContractorChange(obj);
                  }}
                  quantityData={this.props.grid.addedQuantity}
                  addQuantity={this.props.addQuantity}
                  deleteQuantity={index => this.props.deleteQuantity(index)}
                  editQuantity={index => this.props.editQuantity(index)}
                  totalQuantity={this.props.grid.totalQuantity}
                  totalSubContractor={this.props.grid.totalSubContractor}
                  {...this.props.grid}
                />

                <FormRow>
                  <CheckBox
                    label="RFI Level Verification"
                    checked={this.state.LVCheckBox}
                    onChange={() => this.LVChange()}
                  />
                  <CheckBox
                    label="RFI Compaction Testing"
                    checked={this.state.CTCheckBox}
                    onChange={() => this.CTChange()}
                  />
                </FormRow>
                <FormRow>
                  <TextInput
                    label="RFI Number"
                    onChange={e => this.props.handleRFILVChange(e.target.value)}
                    value={this.props.grid.rfiNoLV}
                    disabled={this.state.enableLV}
                  />
                  <TextInput
                    label="RFI Number"
                    onChange={e => this.props.handleRFICTChange(e.target.value)}
                    value={this.props.grid.rfiNoCT}
                    disabled={this.state.enableCT}
                  />
                </FormRow>
                <FormRow>
                  <DateInput
                    label="Inspection Date"
                    onChange={e =>
                      this.props.handleRFILVInspectionDateChange(e.target.value)
                    }
                    value={this.props.grid.rfiInspectionDateLV}
                    disabled={this.state.enableLV}
                  />
                  <DateInput
                    label="Inspection Date"
                    onChange={e =>
                      this.props.handleRFICTInspectionDateChange(e.target.value)
                    }
                    value={this.props.grid.rfiInspectionDateCT}
                    disabled={this.state.enableCT}
                  />
                </FormRow>
                <FormRow>
                  <DateInput
                    label="Approval Date"
                    onChange={e =>
                      this.props.handleRFILVApprovalDateChange(e.target.value)
                    }
                    value={this.props.grid.rfiApprovalDateLV}
                    disabled={this.state.enableLV}
                  />
                  <DateInput
                    label="Approval Date"
                    onChange={e =>
                      this.props.handleRFICTApprovalDateChange(e.target.value)
                    }
                    value={this.props.grid.rfiApprovalDateCT}
                    disabled={this.state.enableCT}
                  />
                </FormRow>
                <FormRow>
                  <SimpleDropDown
                    label="RFI Status (Approval)"
                    selectOptions={this.props.grid.approvalOptions}
                    onChange={e =>
                      this.props.handleRFILVApprovalStatusChange(e.target.value)
                    }
                    value={this.props.grid.rfiLVApprovalStatus}
                    disabled={this.state.enableLV}
                  />
                  <SimpleDropDown
                    label="RFI Status (Approval)"
                    selectOptions={this.props.grid.approvalOptions}
                    onChange={e =>
                      this.props.handleRFICTApprovalStatusChange(e.target.value)
                    }
                    value={this.props.grid.rfiCTApprovalStatus}
                    disabled={this.state.enableCT}
                  />
                </FormRow>
                <FormRow>
                  <TextArea
                    label="Remarks"
                    size="col-md-12"
                    labelSize="col-sm-1"
                    fieldSize="col-sm-10 dpr-remark-fix"
                    placeholder="Add Remarks"
                    onChange={e =>
                      this.props.handleRemarksChange(e.target.value)
                    }
                    value={this.props.grid.rfiRemarks}
                  />
                </FormRow>
                <FormRow>
                  <SimpleDropDown
                    size="col-md-6"
                    label="Layer Status"
                    selectOptions={layerDropDownMeta}
                    onChange={e =>
                      this.props.handleLayerStatusChange(e.target.value)
                    }
                    value={this.props.grid.rfiLayerStatus}
                  />
                </FormRow>
                <Button
                  btnText="Save"
                  btnType="primary"
                  onClick={this.props.updateLayerProgress}
                />
                <Button
                  btnText="Cancel"
                  btnType="cancel"
                  onClick={this.props.cancelLayerProgress}
                />
              </TabPane>
              {/* Cleaning Tab */}

              <TabPane isActive={this.state.tabPaneStatus[2].isActive}>
                <Photographs {...this.props} />
              </TabPane>
            </TabContent>
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default GridDPR;
