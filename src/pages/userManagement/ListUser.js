import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import DataTable from "../../common/DataTable";
import ConfirmModal from "../../common/ConfirmModal";
import CustomAlert from "../../common/forms/customAlert";
import { listUserMetaData, transformUserList } from "./utils";
import Button from "../../common/forms/Button";
import CreateUser from "../../container/userManagement/createUserContainer";
import CustomDataTable from "../../common/CustomDataTable";

class ListUser extends Component {
  constructor(props) {
    super(props)
    this.state = {
      activeId: null,
      showDeleteModal: false,
    }
  }
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
        <CreateUser 
          showAddUserModal={this.props.user.showAddUserModal} 
        />
        <FormContainer formTitle={"Available Users"}>
          <Button 
            btnText="Create New User" 
            btnType="btn-primary float-right" 
            onClick={this.props.showAddUserModal}
          />
          {this.props.user.userList && (
            <CustomDataTable
              metaData={listUserMetaData(
                (id) => this.setState({activeId: id, showDeleteModal: true}),
                (id) => console.log("edit user")
              )}
              bodyData={transformUserList(this.props.user.userList)}
              pagination={true}
              paginationTotalRows={this.props.user.userList && this.props.user.userList.length}
              paginationPerPage={5}
              noHeader={true}
            />
          )}
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() => this.setState({ showDeleteModal: false, activeId: null })}
            title="Delete User"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId)
              this.setState({ showDeleteModal: false, activeId: null });
            }}
          >
            <h6 className="text-danger">
              Are you sure you want to delete this User?
            </h6>
          </ConfirmModal>
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default ListUser;
