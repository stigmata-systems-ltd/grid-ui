import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';

import {
  _subContractorReportMetaData,
  _subContractorReportbodyData,
  transformSubConReport,
} from './utils';
import DataTable from '../../common/DataTable';
import DateFilter from './DateFilter';
import CustomDataTable from '../../common/CustomDataTable';
import TableFilter from '../../common/TableFilter';
import Loader from '../../common/Loader';
class SubContractorReport extends Component {
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
    this.props.resetDate();
    this.props.fetchSCRReport();
  }
  render() {
    return (
      <>
        {this.props.reports.islistSCRReportLoading && <Loader />}
        <ContentLoader>
          <FormContainer formTitle={'Sub-Contractor Report'}>
            <DateFilter
              onChangeFrom={e =>
                this.props.handleFromDateChange(e.target.value)
              }
              onChangeTo={e => this.props.handleToDateChange(e.target.value)}
              bodyData={transformSubConReport(
                this.props.reports.listSubContractorReport
              )}
              fileName="SubcontractorReport"
            />
            <FormRow>
              <CustomDataTable
                metaData={_subContractorReportMetaData()}
                bodyData={transformSubConReport(
                  this.props.reports.listSubContractorReport
                )}
                pagination={true}
                paginationTotalRows={
                  this.props.reports.listSubContractorReport &&
                  this.props.reports.listSubContractorReport.length
                }
                paginationPerPage={10}
                noHeader={true}
                // subHeader
                // subHeaderComponent={
                //   <TableFilter
                //     placeholder="Search By Vendor Code"
                //     onFilter={e => {
                //       e.target.value === '' &&
                //         this.setState({
                //           resetPaginationToggle: !this.state
                //             .resetPaginationToggle,
                //         });
                //       this.setState({ filterText: e.target.value });
                //     }}
                //     filterText={this.state.filterText}
                //   />
                // }
              />
            </FormRow>
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default SubContractorReport;
