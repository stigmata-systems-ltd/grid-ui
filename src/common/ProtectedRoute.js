import React, { Component } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { getRoutePermission } from "../utils/pageAccess";
import { setPageAccess } from "../actions/authActions";
import { setRoleBasedRoutes } from "../utils/pageAccess";
import store from "../store";
import { SET_ROLE_BASED_ROUTE_ACCESS } from "../actions/types";

class ProtectedRoute extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isRender: true,
            isAllowed: false,
        }
        store.dispatch(setPageAccess()).then(() => {
            store.dispatch({
                type: SET_ROLE_BASED_ROUTE_ACCESS,
                payload: setRoleBasedRoutes()
            });
            this.setState({ isAllowed: getRoutePermission(this.props.path) })
            this.setState({ isRender: false });
        })
    }
    componentDidUpdate(prevProps) {
        if (this.props.path !== prevProps.path) {
            store.dispatch(setPageAccess()).then(() => {
                store.dispatch({
                    type: SET_ROLE_BASED_ROUTE_ACCESS,
                    payload: setRoleBasedRoutes()
                });
                this.setState({ isAllowed: getRoutePermission(this.props.path) })
                this.setState({ isRender: false });
            })
        }
    }


    render() {
        return (
            <>{this.state.isRender ? "Loading..." :
                this.state.isAllowed ?
                    <Route path={this.props.path} component={this.props.component} exact={this.props.exact} /> :
                    <Redirect to='/unauthorized' />
            }</>
        )
    }
}

export default ProtectedRoute;