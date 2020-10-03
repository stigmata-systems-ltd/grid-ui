import { connect } from "react-redux";
import Profile from "../../pages/profile/Profile";
import store from "../../store";
import { changePwd, getProfileDetails } from "../../actions/userManagementActions";
import { CHANGE_NEW_PWD, CHANGE_CURRENT_PWD, RESET_CHANGE_PWD_FORM } from "../../actions/types";

const mapDispatchToProps = (dispatch) => {
  return {
    getProfileDetails() {
      dispatch(getProfileDetails());
    },
    handleCurrentPwd(value) {
      dispatch({
        type: CHANGE_CURRENT_PWD,
        payload: value,
      });
    },
    handleNewPwd(value) {
      dispatch({
        type: CHANGE_NEW_PWD,
        payload: value,
      });
    },
    savePwd() {
      dispatch(changePwd()).then(()=>{
        dispatch({
          type: RESET_CHANGE_PWD_FORM,
        });
      });
    },
    resetChangePwdForm() {
      dispatch({
        type: RESET_CHANGE_PWD_FORM,
      });
    }
  };
};

const mapStateToProps = (state) => {
  const user = state.user;
  return {
    user,
    userDetails: user.userDetails,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Profile);
