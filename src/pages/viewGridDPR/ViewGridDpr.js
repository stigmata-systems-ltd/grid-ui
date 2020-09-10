import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import AddLatLng from "../createGrid/AddLatLng";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import CheckBox from "../../common/forms/CheckBox";
import DataTable from "../../common/DataTable";
import GridDetailsDataTable from '../../common/GridDetailsDataTable';
import TabContent from '../../common/tabs/TabContent';
import TabPane from '../../common/tabs/TabPane';
import TabNavs from "../../common/tabs/TabNavs";




import {
  _cGMetaData,
  _RFILevelVerificationMetaData,
  _RFICompactionTestMetaData,
  _CGbodyData,
  _RFILevelVerificationbodyData,
  _RFICompactionTestbodyData,
  tabMetaData
} from './utils';
import LayerDPRDetails from "./LayerDPRDetails";
import ViewGridLocationTable from "../../common/ViewGridLocationTable";


class ViewGridDpr extends Component {

  constructor() {
    super()
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
        <FormContainer formTitle={"View Grid DPR"}>
          <TabNavs
            navItems={this.state.navData}
            onClick={id => this.handleTabs(id)}
          />
          <TabContent>
            <TabPane isActive={this.state.tabPaneStatus[0].isActive}>
              <FormRow>
                <TextInput
                  label="Grid Number"
                />
                <TextInput
                  label="Grid Area"
                />
              </FormRow>
              <FormRow>
                <ViewGridLocationTable />

              </FormRow>

              {/* Grid Details */}

              <FormRow>
                <br />
                <h5> Cleaning and Grubbing Details</h5>
                <GridDetailsDataTable
                  metaData={_cGMetaData}
                  bodyData={_CGbodyData}
                />
              </FormRow>
              {/* <FormRow>
            <br />
            <h5> RFI Level Verification</h5>
            <GridDetailsDataTable
              metaData={_RFILevelVerificationMetaData}
              bodyData={_RFILevelVerificationbodyData}
            />
          </FormRow>
          <FormRow>
            <br />
            <h5> RFI Compaction Testing</h5>
            <GridDetailsDataTable
              metaData={_RFICompactionTestMetaData}
              bodyData={_RFICompactionTestbodyData}
            />
          </FormRow> */}
            </TabPane>

            {/* Layer DPR Details */}


            <TabPane isActive={this.state.tabPaneStatus[1].isActive}>
              <LayerDPRDetails />

            </TabPane>

          </TabContent>
        </FormContainer>
      </ContentLoader>
    )
  }
}

export default ViewGridDpr;