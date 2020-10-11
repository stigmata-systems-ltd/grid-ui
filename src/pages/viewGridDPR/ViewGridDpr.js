import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import Label from "../../common/forms/Label";
import GridDetailsDataTable from "../../common/GridDetailsDataTable";
import TabContent from "../../common/tabs/TabContent";
import TabPane from "../../common/tabs/TabPane";
import TabNavs from "../../common/tabs/TabNavs";
import LatLongReadOnlyTable from "../../common/LatLongReadOnlyTable";
import Photographs from "../viewGridDPR/Photographs";

import {
  _cGMetaData,
  _latLongMetaData,
} from "./utils";
import LayerDPRDetails from "./LayerDPRDetails";

class ViewGridDpr extends Component {
  constructor() {
    super();
    this.state = {
      selectedGrid: 0,
      selectedLayer: 0,
      navData: [
        {
          id: 1,
          navText: "Grid Details",
          isActive: true,
        },
        {
          id: 2,
          navText: "Layer DPR Details",
          isActive: false,
        },
        {
          id: 3,
          navText: 'Layer Photographs',
          isActive: false,
        },
      ],
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

  handleGridSelection = (val) => {
    this.setState({ selectedGrid: val });
  };
  handleLayerSelection = (val) => {
    this.setState({ selectedLayer: val });
  };

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
                <Label
                  label="Grid Number"
                  readOnly="test"
                  value={this.props.grid.gridNumber}
                />
                <Label
                  label="Grid Area"
                  readOnly="test"
                  value={this.props.grid.gridArea}
                />
              </FormRow>
              <FormRow>
                <LatLongReadOnlyTable
                  metaData={_latLongMetaData}
                  bodyData={this.props.grid.gridLatLong}
                />
              </FormRow>

              {/* Grid Details */}

              <FormRow>
                <br />
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
                rfiNoCT={this.props.grid.view_rfiNoCT}
                rfiNoLV={this.props.grid.view_rfiNoLV}
                fetchLayerInfo={(i) => this.props.fetchLayerInfo(i)}
              />
            </TabPane>
            <TabPane isActive={this.state.tabPaneStatus[2].isActive}>
              <Photographs {...this.props} />
            </TabPane>
          </TabContent>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ViewGridDpr;
