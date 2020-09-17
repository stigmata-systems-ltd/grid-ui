import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import { _viewGridMetaData, transformGridData } from './utils';
import CustomAlert from '../../common/forms/customAlert';
import CustomDataTable from "../../common/CustomDataTable";

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
            <CustomDataTable
              metaData={_viewGridMetaData(
                (id) => this.props.onDeleteClick(id),
                (id) => this.props.onEditClick(id),
                (id) => this.props.onViewClick(id)
              )}
              bodyData={transformGridData(this.props.grid.listGridDetails)}
              pagination={true}
              paginationTotalRows={this.props.grid.listGridDetails && this.props.grid.listGridDetails.length}
              paginationPerPage={5}
              noHeader={true}
            />
          </FormRow>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default Dashboard;
