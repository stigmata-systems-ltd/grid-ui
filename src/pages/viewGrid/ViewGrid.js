import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import ActionDataTable from '../../common/ActionDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';

import { _viewGridMetaData, _bodyData } from './utils';
import DownloadToExcelButton from '../../common/forms/DownloadToExcelButton';

import CustomAlert from '../../common/forms/customAlert';

class Dashboard extends Component {
  componentDidMount() {
    this.props.fetchGridData();
  }

  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Grid List'}>
          <div>
            {this.props.grid.deleteGrid.message ? (
              <CustomAlert
                variant={this.props.grid.variant}
                message={this.props.grid.deleteGrid.message}
              />
            ) : null}
          </div>
          <FormRow>
            <SearchBox />
            <DownloadToExcelButton />
            <ActionDataTable
              metaData={_viewGridMetaData}
              bodyData={this.props.grid.listGrid}
              onDeleteClick={i => this.props.onDeleteClick(i)}
              onEditClick={i => this.props.onEditClick(i)}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default Dashboard;
