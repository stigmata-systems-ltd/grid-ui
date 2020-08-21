import { connect } from "react-redux";
import CreateGrid from "../components/CreateGrid";
import store from "../../store";
import {
    createGrid,
} from "../actions/GridManagementActions";
import {
    TITLE_CHANGE,
    BODY_CHANGE,
} from "../const";
const mapDispatchToProps = (dispatch) => {
    return {
        saveGridData() {
            dispatch(createGrid())
        },
        handleChangeTitle(value) {
            dispatch({
                type: TITLE_CHANGE,
                payload: value
            })
        },
        handleChangeBody(value) {
            dispatch({
                type: BODY_CHANGE,
                payload: value
            })
        }
    }
}

const mapStateToProps = (state) => {
    const grid = store.getState().grid;
    return {
        title: grid.title,
        body: grid.body,
    }
}

export default connect (
    mapStateToProps,
    mapDispatchToProps,
)(CreateGrid)