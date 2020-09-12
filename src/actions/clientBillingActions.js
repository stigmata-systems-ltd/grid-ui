import {
    GET_CLIENT_GRID_LIST,
  } from './types';
  import store from '../store';
  import axios from 'axios';
  import config from '../config';
  
  export const getGridList = () => {
    return {
      type: GET_CLIENT_GRID_LIST,
      payload: axios.get(config.BASE_URL + '/api/Grid/GridNoList'),
    };
  };