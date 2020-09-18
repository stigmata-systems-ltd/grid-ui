import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import { _viewGridMetaData, transformGridData } from './utils';
import CustomAlert from '../../common/forms/customAlert';
import CustomDataTable from "../../common/CustomDataTable";
import ConfirmModal from "../../common/ConfirmModal";
class Dashboard extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeGridId: null,
      showDeleteModal: false,
    }
  }
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
                (id) => {
                  this.setState({activeGridId: id, showDeleteModal: true})
                },
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
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() => this.setState({showDeleteModal: false, activeGridId: null})}
            title="Delete Grid"
            handleConfirm={() => {
              this.props.onDeleteClick(this.state.activeGridId)
              this.setState({showDeleteModal: false});
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this Grid?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default Dashboard;
