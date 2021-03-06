import store from '../store';
import axios from 'axios';
import config from '../config';
import { GET_CLIENT_GRID_LIST, GET_LAYERS_FOR_BILLING, SAVE_CLIENT_BILLING } from './types';
import { getUserDetails } from "../utils/auth";

export const getGridList = () => {
  return {
    type: GET_CLIENT_GRID_LIST,
    payload: axios.get(config.BASE_URL + '/api/Grid/GridNoList'),
  };
};
export const getLayerListForBilling = () => {
  const client = store.getState().client;
  return {
    type: GET_LAYERS_FOR_BILLING,
    payload: axios.get(
      config.BASE_URL +
        '/api/Client/LayerNoforBilling?gridId=' +
        parseInt(client.selectedGrid.value)
    ),
  };
};
export const saveClientBilling = data => {
  let postData = data;
  postData.userId = getUserDetails().id;
  return {
    type: SAVE_CLIENT_BILLING,
    payload: axios.post(
      config.BASE_URL + '/api/Client/CreateClientBilling',
      postData
    ),
  };
};
