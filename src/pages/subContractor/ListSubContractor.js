import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import ActionDataTable from '../../common/ActionDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';

import { _viewSCRMetaData } from './utils';
import DownloadToExcelButton from '../../common/forms/DownloadToExcelButton';

class ListSubContractor extends Component {
  componentDidMount() {
    this.props.fetchSCRData();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Grid List'}>
          <FormRow>
            <SearchBox />
            <DownloadToExcelButton />
            <ActionDataTable
              metaData={_viewSCRMetaData}
              bodyData={this.props.scr.listSCR}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ListSubContractor;
