import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import SCRDataTable from '../../common/scrDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';

import CustomAlert from '../../common/forms/customAlert';
import { _viewSCRMetaData } from './utils';
import DownloadToExcelButton from '../../common/forms/DownloadToExcelButton';

class ListSubContractor extends Component {
  componentDidMount() {
    this.props.fetchSCRData();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'List SubContractor'}>
          <div>
            {this.props.scr.deleteSubContractor.message ? (
              <CustomAlert
                variant={this.props.scr.variant}
                message={this.props.scr.deleteSubContractor.message}
              />
            ) : null}
          </div>
          <FormRow>
            <SearchBox />
            <DownloadToExcelButton />
            <SCRDataTable
              metaData={_viewSCRMetaData}
              bodyData={this.props.scr.listSCR}
              onDeleteClick={i => this.props.deleteSCR(i)}
              onEditClick={i => this.props.editSCR(i)}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ListSubContractor;
