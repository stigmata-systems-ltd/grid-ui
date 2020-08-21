import {
    CREATE_GRID,
    TITLE_CHANGE,
    BODY_CHANGE
} from "../const";

const initialState = {
    title: "",
    body: "",
}

export default (state = initialState, action) => {

    switch(action.type) {
        case `${CREATE_GRID}_FULFILLED` : {
            return {
              ...state,
              postData: action.payload.data,
            }
          }
        case TITLE_CHANGE: 
            return {
                ...state,
                title: action.payload,
            }
        case BODY_CHANGE: 
            return {
                ...state,
                body: action.payload,
            }
        default: 
          return state;
    }
    
}