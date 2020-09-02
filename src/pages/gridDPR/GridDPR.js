import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import TabContent from '../../common/tabs/TabContent';
import TabPane from '../../common/tabs/TabPane';
import TabNavs from '../../common/tabs/TabNavs';

import { gridNumber, layers, tabMetaData, layerStsMeta } from './utils';
import Cleaning from './Cleaning';
import TextInput from '../../common/forms/TextInput';
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
              <Cleaning />
            </TabPane>
            <TabPane isActive={this.state.tabPaneStatus[1].isActive}>
              <FormRow>
                <SimpleDropDown
                  label="Grid Number"
                  selectOptions={gridNumber}
                  onChange={this.handleGridSelection}
                  value={this.state.selectedGrid}
                />
                <SimpleDropDown
                  label="Layer Number"
                  selectOptions={layers}
                  onChange={this.handleLayerSelection}
                  value={this.state.selectedLayer}
                />
              </FormRow>
              <FormRow>
                <TextInput label="Date" />
                <TextInput label="Area Of Layer" />
              </FormRow>
              <FormRow>
                <SimpleDropDown
                  label="Layer Status"
                  selectOptions={layerStsMeta}
                  onChange={this.handleLayerSelection}
                  value={this.state.selectedLayer}
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
                <TextInput label="Fill Type" />
                <TextInput label="Top Level Fill Material" />
              </FormRow>
              <FormRow>
                <CheckBox label="RFI Level Verification" />
                <CheckBox label="RFI Compaction Testing" />
              </FormRow>
              <FormRow>
                <TextInput label="RFI Number" />
                <TextInput label="RFI Number" />
              </FormRow>
              <FormRow>
                <TextInput label="Inspection Date" />
                <TextInput label="Inspection Date" />
              </FormRow>
              <FormRow>
                <TextInput label="Approval Date" />
                <TextInput label="Approval Date" />
              </FormRow>
              <FormRow>
                <TextInput label="RFI Status" />
                <TextInput label="RFI Status" />
              </FormRow>
              <FormRow>
                <TextArea label="Material Description" size="col-md-6" />
                <FileInput label="Select Documents" />
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
