import { GRID_NO_LIST, GRID_LATLANG, GRID_ADD } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';
console.log(`Config value ${JSON.stringify(config)}`);
export const gridNoList = () => {
  return {
    type: GRID_NO_LIST,
    payload: axios.get(config.BASE_URL + '/api/Grid/GridNoList'),
  };
};

export const createGrid = () => {
  const grid = store.getState().grid;
  const postData = {
    gridno: grid.gridNumber,
    grid_area: parseInt(grid.gridArea),
    gridGeoLocation: grid.gridLatLong,
    user_id: 1,
  };
  console.log(`Create Grid: ${JSON.stringify(postData)}`);
  return {
    type: GRID_ADD,
    payload: axios.post(config.BASE_URL + '/api/Grid/AddGrid', postData),
  };
};

export const addLatLang = () => {
  const grid = store.getState().grid;
  let gridLatLong = grid.gridLatLong;
  console.log(gridLatLong);
  const latlangObj = {
    latitude: '',
    longitude: '',
  };
  gridLatLong.push(latlangObj);
  console.log(`In grid action: ${grid.gridLatLong}`);
  return {
    type: GRID_LATLANG,
    payload: gridLatLong,
  };
};
