import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import GridDetailsDataTable from '../../common/GridDetailsDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';

import {
  _cGMetaData,
  _RFILevelVerificationMetaData,
  _RFICompactionTestMetaData,
  _CGbodyData,
  _RFILevelVerificationbodyData,
  _RFICompactionTestbodyData,
} from './utils';

class Dashboard extends Component {
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
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default Dashboard;
