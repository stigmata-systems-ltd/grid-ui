import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { _listUserMetaData, transformUserList } from "./utils";
import Button from "../../common/forms/Button";
class ListUser extends Component {
  componentDidMount() {
    this.props.getUsers();
  }

  render() {
    return (
      <ContentLoader>
        {(this.props.user.isSuccess || this.props.user.isError) &&
        <CustomAlert 
          variant={this.props.user.isSuccess ? 'success' : 'danger'}
          message={this.props.user.message}
        />
        }
        <FormContainer formTitle={"Available Users"}>
          <Button btnText="Create New User" btnType="btn-primary float-right" />
          {this.props.user.userList && (
            <DataTable
              metaData={_listUserMetaData}
              bodyData={transformUserList(this.props.user.userList)}
              showEdit={true}
              showDelete={true}
              onClickDelete={(id) => this.props.userDelete(id)}
              onEditClick={(id) => this.props.editUser(id)}
            />
          )}
          <ConfirmModal
            showModal={this.props.user.showDeleteConfirm}
            handleClose={this.props.handleConfirmClose}
            title="Delete User"
            handleConfirm={this.props.handleConfirmDelete}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this user?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ListUser;
