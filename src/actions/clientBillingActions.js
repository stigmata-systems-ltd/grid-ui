import store from '../store';
import axios from 'axios';
import config from '../config';
import { GET_CLIENT_GRID_LIST, GET_LAYERS_FOR_BILLING } from './types';

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
  return {
    type: GET_LAYERS_FOR_BILLING,
    payload: axios.post(
      config.BASE_URL + '/api/Client/CreateClientBilling',
      data
    ),
  };
};
