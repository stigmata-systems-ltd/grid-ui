import React, { Component } from 'react';
import { Form, Alert } from 'react-bootstrap';
import { connect } from 'react-redux';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import AddLatLng from '../createGrid/AddLatLng';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import CheckBox from '../../common/forms/CheckBox';
import DataTable from '../../common/DataTable';
import { addSubContractor } from '../../actions/subContractorActions';
import CustomAlert from '../../common/forms/customAlert';
class CreateUser extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Create User'}>
          <div>
            {this.props.user.addUser.message ? (
              <CustomAlert
                variant={this.props.user.variant}
                message={this.props.user.addUser.message}
              />
            ) : null}
          </div>
          <FormRow>
            <TextInput
              label="First Name"
              name="firstName"
              id="firstName"
              onChange={e => this.props.handleFirstNameChange(e.target.value)}
              value={this.props.user.firstName}
            />
            <TextInput
              label="Last Name"
              name="lastName"
              id="lastName"
              onChange={e => this.props.handleLastNameChange(e.target.value)}
              value={this.props.user.lastName}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="Email ID"
              name="emailID"
              id="emailID"
              onChange={e => this.props.handleEmailChange(e.target.value)}
              value={this.props.user.email}
            />
            <TextInput
              label="Mobile No"
              name="mobileNo"
              id="mobileNo"
              onChange={e => this.props.handleMobileChange(e.target.value)}
              value={this.props.user.mobileNo}
            />
          </FormRow>
          <FormRow>
            <TextInput
              label="User Name"
              name="userName"
              id="userName"
              onChange={e => this.props.handleUserNameChange(e.target.value)}
              value={this.props.user.userName}
            />
            <TextInput
              label="Password"
              name="password"
              id="password"
              onChange={e => this.props.handlePasswordChange(e.target.value)}
              value={this.props.user.password}
            />
          </FormRow>
          <FormRow>
            <SimpleDropDown
              label="Role Name"
              selectOptions={this.props.user.roleList}
              onChange={e => this.props.handleRoleNameChange(e.target.value)}
              // value={this.state.selectedGrid}>
            />
          </FormRow>
          <Button
            btnText="Save"
            onClick={this.props.createUser}
            btnType="primary"
          />
          <Button btnText="Cancel" btnType="cancel" />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default CreateUser;
