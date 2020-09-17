import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import Modal from "../../common/Modal";
import Loader from "../../common/Loader";
import { transformUserRoles } from "./utils";

class CreateUser extends Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    this.props.getUserRoles();
  }

  render() {
    return (
      <Modal
        title="Create New User"
        showModal={this.props.showAddUserModal}
        handleSave={this.props.createUser}
        handleClose={this.props.closeAddUserModal}
        size="lg"
      >
        {this.props.isLoading && <Loader />}
        <FormRow>
          <TextInput
            label="First Name"
            name="firstName"
            id="firstName"
            onChange={(e) => this.props.handleFirstNameChange(e.target.value)}
            value={this.props.user.firstName}
          />
          <TextInput
            label="Last Name"
            name="lastName"
            id="lastName"
            onChange={(e) => this.props.handleLastNameChange(e.target.value)}
            value={this.props.user.lastName}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="Email ID"
            name="emailID"
            id="emailID"
            onChange={(e) => this.props.handleEmailChange(e.target.value)}
            value={this.props.user.email}
          />
          <TextInput
            label="Mobile No"
            name="mobileNo"
            id="mobileNo"
            onChange={(e) => this.props.handleMobileChange(e.target.value)}
            value={this.props.user.mobileNo}
          />
        </FormRow>
        <FormRow>
          <TextInput
            label="User Name"
            name="userName"
            id="userName"
            onChange={(e) => this.props.handleUserNameChange(e.target.value)}
            value={this.props.user.userName}
          />
          <SimpleDropDown
            label="Role Name"
            selectOptions={transformUserRoles(this.props.user.userRoles)}
            onChange={(e) => this.props.handleRoleNameChange(e.target.value)}
            value={this.props.user.roleName}
          />
        </FormRow>
      </Modal>
    );
  }
}

export default CreateUser;
