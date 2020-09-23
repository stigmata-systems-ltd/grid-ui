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
import TableFilter from "../../common/TableFilter";
import Col6 from "../../common/forms/Col6";

class ListUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeId: null,
      showDeleteModal: false,
      filterText: "",
      resetPaginationToggle: false,
    };
  }
  componentDidMount() {
    this.props.getUsers();
  }

  filteredItems = (data) => {
    return (
      data &&
      data.filter(
        (item) =>
          item.email &&
          item.email.toLowerCase().includes(this.state.filterText.toLowerCase())
      )
    );
  };

  render() {
    return (
      <ContentLoader>
        {this.props.user.isAddUserMsg && (
          <CustomAlert
            variant="success"
            message={this.props.user.message}
          />
        )}
        <CreateUser showAddUserModal={this.props.user.showAddUserModal} />
        <FormContainer formTitle={"Available Users"}>
          {this.props.user.userList && (
            <CustomDataTable
              metaData={listUserMetaData(
                (id) => this.setState({ activeId: id, showDeleteModal: true }),
                (id) => this.props.handleEditUser(id),
              )}
              bodyData={transformUserList(
                this.filteredItems(this.props.user.userList)
              )}
              progressPending={this.props.user.isLoading}
              pagination={true}
              paginationTotalRows={
                this.props.user.userList &&
                this.filteredItems(this.props.user.userList).length
              }
              paginationPerPage={5}
              noHeader={true}
              subHeader
              subHeaderComponent={
                <>
                  <TableFilter
                    placeholder="Search By Email"
                    fieldSize="float-left col-sm-10"
                    onFilter={(e) => {
                      e.target.value === "" &&
                        this.setState({
                          resetPaginationToggle: !this.state
                            .resetPaginationToggle,
                        });
                      this.setState({ filterText: e.target.value });
                    }}
                    filterText={this.state.filterText}
                  />
                  <Col6>
                  <Button
                    btnText="Create New User"
                    btnType="btn-primary float-right"
                    onClick={this.props.showAddUserModal}
                  />
                  </Col6>
                </>
              }
            />
          )}
          <ConfirmModal
            showModal={this.state.showDeleteModal}
            handleClose={() =>
              this.setState({ showDeleteModal: false, activeId: null })
            }
            title="Delete User"
            handleConfirm={() => {
              this.props.handleConfirmDelete(this.state.activeId);
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
