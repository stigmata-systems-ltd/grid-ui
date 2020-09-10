import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import ActionDataTable from '../../common/ActionDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';
import { _viewGridMetaData, _bodyData } from './utils';
import DownloadToExcelButton from '../../common/forms/DownloadToExcelButton';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchGridNoData();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Grid List'}>
          <FormRow>
            <SearchBox />
            <DownloadToExcelButton />
            <ActionDataTable
              metaData={_viewGridMetaData}
              bodyData={this.props.grid.gridNoData}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default Dashboard;
