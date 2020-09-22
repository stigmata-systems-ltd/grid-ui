import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import SCRDataTable from '../../common/scrDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';
import CustomDataTable from '../../common/CustomDataTable';
import CustomAlert from '../../common/forms/customAlert';
import ConfirmModal from '../../common/ConfirmModal';
import { viewRoleMetaData, transformRoles } from './utils';

class ListRoles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
    };
  }
  componentDidMount() {
    this.props.fetchRoleData();
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'List Roles'}>
          <FormRow>
            <CustomDataTable
              metaData={viewRoleMetaData(
                id => this.setState({ activeId: id, showDeleteModal: true }),
                id => this.props.editRole(id)
              )}
              bodyData={transformRoles(this.props.roles.listRoleDetails)}
              pagination={false}
              paginationTotalRows={
                this.props.roles.listRoleDetails &&
                this.props.roles.listRoleDetails.length
              }
              paginationPerPage={5}
              noHeader={true}
            />
          </FormRow>
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>
              this.setState({ showDeleteModal: false, activeId: null })
            }
            title="Delete SubContractor"
            handleConfirm={() => {
              this.props.deleteSCR(this.state.activeId);
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this SubContractor?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ListRoles;
