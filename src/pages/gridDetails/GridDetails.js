import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import GridDetailsDataTable from '../../common/GridDetailsDataTable';

import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import { getGridRFILevelVerificationDetails ,getGridRFICompactionTestingDetails} from "../../container/grid/dataTransformer";
import {
  _cGMetaData,
  _RFILevelVerificationMetaData,
  _RFICompactionTestMetaData,
  _CGbodyData,
  _RFILevelVerificationbodyData,
  _RFICompactionTestbodyData,
} from './utils';


class GridDetails extends Component {

  componentDidMount() {
    this.props.fetchRfiLevelVerificationData();
  }

  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Grid Details'}>
          <FormRow>
            <br />
            <h5> Cleaning and Grubbing Details</h5>
            <GridDetailsDataTable
              metaData={_cGMetaData}
              bodyData={_CGbodyData}
            />
          </FormRow>
          <FormRow>
            <br />
            <h5> RFI Level Verification</h5>
            {console.log("log",this.props.gridDetails.gridRfiLevelData)}
            <GridDetailsDataTable
              metaData={_RFILevelVerificationMetaData}
              bodyData={getGridRFILevelVerificationDetails(this.props.gridDetails.gridRfiLevelData)}
              // bodyData={_RFILevelVerificationbodyData}
            />
          </FormRow>
          <FormRow>
            <br />
            <h5> RFI Compaction Testing</h5>
            <GridDetailsDataTable
              metaData={_RFICompactionTestMetaData}
              bodyData={getGridRFICompactionTestingDetails(this.props.gridDetails.gridRfiLevelData)}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default GridDetails;
