import { connect } from 'react-redux';
import CreateUser from '../../pages/userManagement/createUser';
import store from '../../store';
import { createUser, getUserRoles } from '../../actions/userManagementActions';
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  MOBILE_NO,
  USERNAME,
  PASSWORD,
  ROLENAME,
  RESET_CREATE_USER_FORM,
  CHANGE_ADD_USER_MODAL_STATUS,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    createUser() {
      dispatch(createUser()).then(() => {
        dispatch({ type: RESET_CREATE_USER_FORM });
        this.closeAddUserModal();
      });
    },
    getUserRoles() {
      dispatch(getUserRoles());
    },
    handleFirstNameChange(value) {
      dispatch({
        type: FIRST_NAME,
        payload: value,
      });
    },
    handleLastNameChange(value) {
      dispatch({
        type: LAST_NAME,
        payload: value,
      });
    },
    handleEmailChange(value) {
      dispatch({
        type: EMAIL,
        payload: value,
      });
    },
    handleMobileChange(value) {
      dispatch({
        type: MOBILE_NO,
        payload: value,
      });
    },
    handleUserNameChange(value) {
      dispatch({
        type: USERNAME,
        payload: value,
      });
    },
    handleRoleNameChange(value) {
      dispatch({
        type: ROLENAME,
        payload: value,
      });
    },
    handlePasswordChange(value) {
      dispatch({
        type: PASSWORD,
        payload: value,
      });
    },
    closeAddUserModal() {
      dispatch({
        type: CHANGE_ADD_USER_MODAL_STATUS,
        payload: false,
      })
    }
  };
};

const mapStateToProps = state => {
  const user = store.getState().user;
  return {
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
