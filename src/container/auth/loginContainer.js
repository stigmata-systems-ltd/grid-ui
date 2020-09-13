import store from "../../store";
import { connect } from "react-redux";
import Login from "../../pages/Login";
import { withRouter } from "react-router-dom";
import { authenticateUser } from "../../actions/authActions";
import { SET_USERNAME, SET_PASSWORD, SET_TOKEN, RESET_LOGIN_DETAILS } from "../../actions/types";
import { setAuthTokens } from "../../utils/auth";

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    authenticateUser(e) {
      e.preventDefault();
      dispatch(authenticateUser()).then((res) => {
          dispatch({ type: RESET_LOGIN_DETAILS })
          dispatch({
              type: SET_TOKEN,
              payload: res.value.data
          })
          setAuthTokens(res.value.data);
          ownProps.history.push('dashboard');
      });
    },
    handleUsernameChange({ value }) {
      dispatch({
        type: SET_USERNAME,
        payload: value,
      });
    },
    handlePasswordChange({ value }) {
      dispatch({
        type: SET_PASSWORD,
        payload: value,
      });
    },
  };
};

const mapStateToProps = (state) => {
  const auth = store.getState().auth;
  return {
    auth,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
