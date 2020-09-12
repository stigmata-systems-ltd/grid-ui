import { connect } from 'react-redux';
import ClientBilling from '../../pages/clientBilling/ClientBilling';
import store from '../../store';
import {
    getGridList,
} from '../../actions/clientBillingActions';
import {
    SET_CLIENT_SELECTED_GRID
} from "../../actions/types";



const mapDispatchToProps = dispatch => {
    return {
        getGridList() {
            dispatch(getGridList());
        },
        handleGridSelection(value) {
            dispatch({
                type: SET_CLIENT_SELECTED_GRID,
                payload: value,
            })
        }
    };
};

const mapStateToProps = state => {
    const client = store.getState().client;
    return {
        client
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(ClientBilling);
