import { CLIENTBILLING_REQUEST, CLIENTBILLING_SUCCESS, CLIENTBILLING_FAILURE } from "../actions/types";


function clientBillingReducer(state = {}, action) {
    switch (action.type) {
        case CLIENTBILLING_REQUEST:
            return { loading: true };
        case CLIENTBILLING_SUCCESS:
            return { loading: false, userInfo: action.payload };

        case CLIENTBILLING_FAILURE:
            return { loading: false, error: action.payload };

        default:
            return state;





    }
}

export { clientBillingReducer};