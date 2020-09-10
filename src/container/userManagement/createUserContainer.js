import { connect } from 'react-redux';
import CreateUser from '../../pages/userManagement/createUser';
import store from '../../store';
import { createUser } from '../../actions/userManagementActions';
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  MOBILE_NO,
  USERNAME,
  PASSWORD,
  ROLENAME,
  RESET_CREATE_USER_FORM,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  console.log('dispatcher');
  return {
    createUser() {
      dispatch(createUser());
      dispatch({ type: RESET_CREATE_USER_FORM });
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
  };
};

const mapStateToProps = state => {
  const user = store.getState().user;
  console.log(user);
  return {
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateUser);
