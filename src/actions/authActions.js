import store from '../store';
import axios from 'axios';
import config from '../config';
import { AUTHENTICATE_USER, SET_PAGE_ACCESS } from "./types";

export const authenticateUser = () => {
    const auth = store.getState().auth;
      const userData = {
          Username: auth.username,
          Password: auth.password
      }
    return {
        type: AUTHENTICATE_USER,
        payload: axios.post(config.BASE_URL + '/api/auth/authenticate',userData)
    }
}

export const setPageAccess = () => {
    const auth = store.getState().auth;
      const userData = {
          Username: auth.username,
          Password: auth.password
      }
    return {
        type: SET_PAGE_ACCESS,
        payload: axios.post(config.BASE_URL + '/api/auth/authenticate',userData)
    }
}

