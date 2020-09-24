import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';

import { _masterReportMetaData, transformMasterReport, masterExcelHeaders } from './utils';
import DataTable from '../../common/DataTable';
import DateFilter from './DateFilter';
import CustomDataTable from '../../common/CustomDataTable';
import TableFilter from '../../common/TableFilter';

class MasterReport extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: '',
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.fetchMasterReport();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Master Report'}>
          <DateFilter
            onChangeFrom={e => this.props.handleFromDateChange(e.target.value)}
            onChangeTo={e => this.props.handleToDateChange(e.target.value)}
            bodyData={transformMasterReport(
              this.props.reports.listMasterReport
            )}
            headers={masterExcelHeaders}
            fileName="MasterReport"
          />
          <FormRow>
            <CustomDataTable
              metaData={_masterReportMetaData()}
              bodyData={transformMasterReport(
                this.props.reports.listMasterReport
              )}
              pagination={true}
              paginationTotalRows={
                this.props.reports.listMasterReport &&
                this.props.reports.listMasterReport.length
              }
              paginationPerPage={10}
              noHeader={true}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default MasterReport;
