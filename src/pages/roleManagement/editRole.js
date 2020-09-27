import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import SCRDataTable from '../../common/scrDataTable';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import SearchBox from '../../common/forms/SearchBox';
import CustomDataTable from '../../common/CustomDataTable';
import CustomAlert from '../../common/forms/customAlert';
import ConfirmModal from '../../common/ConfirmModal';
import Button from '../../common/forms/Button';
import {
  viewRoleMetaData,
  transformRoles,
  editRoleMetaData,
  transformRolesID,
} from './utils';
import Loader from '../../common/Loader';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
class EditRole extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
    };
  }
  render() {
    return (
      <>
        {this.props.roles.isListRoleDetailsIDLoading && <Loader />}
        {this.props.roles.isUpdatePageAccessLoading && <Loader />}

        <ContentLoader>
          <FormContainer formTitle={'Edit Roles'}>
            <div>
              {this.props.roles.updatePage.message ? (
                <CustomAlert
                  variant={this.props.roles.updatePage.variant}
                  message={this.props.roles.updatePage.message}
                />
              ) : null}
            </div>
            <FormRow>
              <CustomDataTable
                metaData={editRoleMetaData(id => this.props.handleChange(id))}
                bodyData={transformRolesID(
                  this.props.roles.listRoleDetailsID,
                  this
                )}
                pagination={true}
                paginationTotalRows={
                  this.props.roles.listRoleDetailsID &&
                  this.props.roles.listRoleDetailsID.length
                }
                handleChange={this.props.handleChange}
                paginationPerPage={10}
                noHeader={true}
              />
            </FormRow>

            <Button
              btnText="Save"
              onClick={this.props.updateRoles}
              btnType="primary"
            />
            <Button
              btnText="Cancel"
              onClick={this.props.redirectToViewRoles}
              btnType="btn-secondary secondary-btn-fix"
            />
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}

export default EditRole;
