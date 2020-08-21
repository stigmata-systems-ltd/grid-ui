import axios from "axios";
import {
    CREATE_GRID,
} from "../const";
import config from "../../config";
import store from "../../store";

export const createGrid = () => {
    const { title, body } = store.getState().grid;
    const gridData = {
        title,
        body,
        userId: 1,
    }
    return {
        type: CREATE_GRID,
        payload: axios.post(config.urls.ENV + "posts", gridData)
    }
}