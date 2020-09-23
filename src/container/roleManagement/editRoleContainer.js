import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import EditRole from '../../pages/roleManagement/editRole';
import store from '../../store';
import {
  fetchRoleData,
  editRole,
  updateRoles,
} from '../../actions/roleManagementActions';
import { UPDATE_PAGE_ACCESS } from '../../actions/types';
import { propTypes } from 'react-bootstrap/esm/Image';

const mapDispatchToProps = (dispatch, props) => {
  return {
    // saveSubContractorData() {
    //   dispatch(addSubContractor());
    //   dispatch({ type: RESET_SUBCONTRACTOR_FORM });
    // },
    fetchRoleData() {
      dispatch(fetchRoleData());
    },
    updateRoles() {
      dispatch(updateRoles()).then(() => {
        props.history.push('/roles/list');
      });
    },
    redirectToViewRoles() {
      props.history.push('/roles/list');
    },
    handleChange(id, description, type) {
      const listRoleDetailsID = store.getState().roles.listRoleDetailsID;
      listRoleDetailsID[id - 1].pageDetail[`${type}`] = !listRoleDetailsID[
        id - 1
      ].pageDetail[`${type}`];
      dispatch({
        type: UPDATE_PAGE_ACCESS,
        payload: listRoleDetailsID,
      });
    },
    // deleteSCR(i) {
    //   dispatch(deleteSCR(i)).then(() => {
    //     dispatch(fetchSubContractor());
    //   });
    // },
    // editSCR(i) {
    //   dispatch(editSCR(i));
    //   props.history.push('/subcontractor/edit');
    // },
    // handleChangeSubName(value) {
    //   dispatch({
    //     type: SUBCONTRACTOR_NAME,
    //     payload: value,
    //   });
    // },
    // handleChangeSubCode(value) {
    //   dispatch({
    //     type: SUBCONTRACTOR_CODE,
    //     payload: value,
    //   });
    // },
    // handleChangesubContractorContactPerson(value) {
    //   dispatch({
    //     type: SUBCONTRACTOR_CONTACT_PERSON,
    //     payload: value,
    //   });
    // },
    // handleChangesubContactAddress(value) {
    //   dispatch({
    //     type: SUBCONTRACTOR_CONTACT_ADDRESS,
    //     payload: value,
    //   });
    // },
    // handleChangesubPhone(value) {
    //   dispatch({
    //     type: SUBCONTRACTOR_PHONE,
    //     payload: value,
    //   });
    // },
    // handleChangesubEmail(value) {
    //   dispatch({
    //     type: SUBCONTRACTOR_EMAIL,
    //     payload: value,
    //   });
    // },
  };
};

const mapStateToProps = state => {
  const roles = store.getState().roles;
  return {
    roles,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditRole)
);
