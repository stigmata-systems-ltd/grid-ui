import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import GridDetailsDataTable from "../../common/GridDetailsDataTable";
import TabContent from "../../common/tabs/TabContent";
import TabPane from "../../common/tabs/TabPane";
import TabNavs from "../../common/tabs/TabNavs";
import LatLongReadOnlyTable from "../../common/LatLongReadOnlyTable";

import {
  _cGMetaData,
  _RFILevelVerificationMetaData,
  _RFICompactionTestMetaData,
  _CGbodyData,
  _RFILevelVerificationbodyData,
  _RFICompactionTestbodyData,
  tabMetaData,
  _latLongMetaData,
} from "./utils";
import LayerDPRDetails from "./LayerDPRDetails";
import Col6 from "../../common/forms/Col6";
import GridData from "./GridData";

class ViewGridDpr extends Component {
  constructor() {
    super();
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

  handleTabs = (id) => {
    this.setState({
      navData: this.state.navData.map((nav) => {
        nav.id === id ? (nav["isActive"] = true) : (nav["isActive"] = false);
        return nav;
      }),
    });
    this.setState({
      tabPaneStatus: this.state.tabPaneStatus.map((tab) => {
        tab.id === id ? (tab["isActive"] = true) : (tab["isActive"] = false);
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
        <FormContainer formTitle={"View Grid DPR"}>
          <TabNavs
            navItems={this.state.navData}
            onClick={(id) => this.handleTabs(id)}
          />
          <TabContent>
            <TabPane isActive={this.state.tabPaneStatus[0].isActive}>
              <FormRow>
                <Col6 size="col-md-4">
                  <blockquote class="blockquote blockquote-info">
                  <GridData
                      label="Grid Number"
                      data={this.props.grid.gridNumber}
                    />
                    <GridData
                      label="Grid Area"
                      data={this.props.grid.gridArea}
                    />
                    <GridData
                      label="Grid Status"
                      data={this.props.grid.rfiApproval}
                      markData={true}
                      markBg="text-info"
                    />
                    <GridData
                      label="Grid Created On"
                      data={this.props.grid.gridArea}
                    />
                  </blockquote>
                </Col6>
                <Col6>
                  <LatLongReadOnlyTable
                    metaData={_latLongMetaData}
                    bodyData={this.props.grid.gridLatLong}
                  />
                </Col6>
              </FormRow>
              <FormRow>
                <h5> Cleaning and Grubbing Details</h5>
                <GridDetailsDataTable
                  metaData={_cGMetaData}
                  bodyData={this.props.grid.cgBodyData}
                />
              </FormRow>
            </TabPane>

            {/* Layer DPR Details */}

            <TabPane isActive={this.state.tabPaneStatus[1].isActive}>
              <LayerDPRDetails
                layerData={this.props.grid.layerData}
                gridNo={this.props.grid.view_gridNo}
                layerNo={this.props.grid.view_layerNo}
                fillingDate={this.props.grid.view_fillingDate}
                area_layer={this.props.grid.view_area_layer}
                topFillMaterial={this.props.grid.view_topFillMaterial}
                fillingMaterial={this.props.grid.view_materialDescription}
                layerSubContractor={this.props.grid.view_layerSubContractor}
                fetchLayerInfo={(i) => this.props.fetchLayerInfo(i)}
              />
            </TabPane>
          </TabContent>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewGridDpr;
