import { combineReducers } from "redux";
import grid from "./GridManagement/reducers/gridReducer";

const rootReducer = combineReducers({
    grid,
});

export default rootReducer;
