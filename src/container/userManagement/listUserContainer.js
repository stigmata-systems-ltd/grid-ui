import { connect } from 'react-redux';
import ListUser from '../../pages/userManagement/ListUser';
import store from '../../store';
import { getUsers, deleteUsers, getSingleUser } from '../../actions/userManagementActions';
import {
  FIRST_NAME,
  LAST_NAME,
  EMAIL,
  MOBILE_NO,
  USERNAME,
  PASSWORD,
  ROLENAME,
  RESET_CREATE_USER_FORM,
  CHANGE_USER_CONFIRM_MODAL_STATUS,
  SET_SELECTED_USER,
  CHANGE_ADD_USER_MODAL_STATUS,
  SET_USER_EDIT_MODE,
  SHOW_ADD_USER_MSG,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    getUsers() {
      dispatch(getUsers());
    },
    userDelete(id) {
      dispatch({
        type: CHANGE_USER_CONFIRM_MODAL_STATUS,
        payload: true,
      })
      dispatch({
        type: SET_SELECTED_USER,
        payload: id,
      })
    },
    handleConfirmClose() {
      dispatch({
        type: CHANGE_USER_CONFIRM_MODAL_STATUS,
        payload: false,
      })
    },
    handleConfirmDelete(userId) {
      //const userId = store.getState().user.selectedUser;
      dispatch(deleteUsers(userId)).then(()=>{
        dispatch(getUsers());
      });
      dispatch({
        type: CHANGE_USER_CONFIRM_MODAL_STATUS,
        payload: false,
      })
    },
    //AddUser
    showAddUserModal() {
      dispatch({
        type: CHANGE_ADD_USER_MODAL_STATUS,
        payload: true,
      })
      dispatch({
        type: SHOW_ADD_USER_MSG,
        payload: false,
      })
    },
    handleEditUser(id) {
      dispatch({
        type: CHANGE_ADD_USER_MODAL_STATUS,
        payload: true,
      })
      dispatch({
        type: SET_USER_EDIT_MODE,
        payload: true,
      })
      dispatch(getSingleUser(id));
    },
  };
};

const mapStateToProps = state => {
  const user = store.getState().user;
  return {
    user,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ListUser);
