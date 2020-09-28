import store from "../../store";
import { connect } from "react-redux";
import Login from "../../pages/Login";
import { withRouter } from "react-router-dom";
import { authenticateUser, setPageAccess } from "../../actions/authActions";
import { SET_USERNAME, SET_PASSWORD, SET_TOKEN, RESET_LOGIN_DETAILS, SET_ROLE_BASED_ROUTE_ACCESS } from "../../actions/types";
import { setAuthTokens, isUserLoggedIn } from "../../utils/auth";
import { setRoleBasedRoutes } from "../../utils/pageAccess";

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
        dispatch(setPageAccess()).then(() => {
          dispatch({
            type: SET_ROLE_BASED_ROUTE_ACCESS,
            payload: setRoleBasedRoutes()
          })
            ownProps.history.push('dashboard');
        })
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
    checkAuthStatus(){
      if(isUserLoggedIn()) {
        ownProps.history.replace("/dashboard");
      }
    }
  };
};

const mapStateToProps = (state) => {
  const auth = store.getState().auth;
  return {
    auth,
  };
};

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Login));
