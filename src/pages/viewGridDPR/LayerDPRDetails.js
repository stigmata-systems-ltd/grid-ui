import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import GridDetailsDataTable from '../../common/GridDetailsDataTable';

import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import {
  _layerMetaData,
  _layerBodyData,
  getGridRFILevelVerificationDetails,
  getGridRFICompactionTestingDetails,
} from './utils';
import LayerDPRDetail from '../../common/LayerDPRDetail';

class LayerDPRDetails extends Component {
  render() {
    return (
      <FormContainer formTitle={'Layer DPR Details'}>
        <FormRow>
          <LayerDPRDetail
            metaData={_layerMetaData}
            bodyData={this.props.layerData}
            gridNo={this.props.gridNo}
            layerNo={this.props.layerNo}
            fillingDate={this.props.fillingDate}
            area_layer={this.props.area_layer}
            topFillMaterial={this.props.topFillMaterial}
            fillingMaterial={this.props.fillingMaterial}
            layerSubContractor={this.props.layerSubContractor}
            fetchLayerInfo={i => this.props.fetchLayerInfo(i)}
          />
        </FormRow>
      </FormContainer>
    );
  }
}

export default LayerDPRDetails;
