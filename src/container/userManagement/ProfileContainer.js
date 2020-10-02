import { connect } from "react-redux";
import Profile from "../../pages/profile/Profile";
import store from "../../store";
import { changePwd, getProfileDetails } from "../../actions/userManagementActions";
import { CHANGE_NEW_PWD, CHANGE_CURRENT_PWD } from "../../actions/types";

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
      changePwd();
    },
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
