import { GRID_NO_LIST } from './types';
import store from '../store';
import axios from 'axios';

// export const gridNoList = () => {
//   return {
//     type: GRID_NO_LIST,
//     payload: axios
//       .get('http://127.0.0.1:4010/api/Grid/GridNoList')
//       .then(data => data),
//   };
// };

export const gridNoList = () => dispatch => {
  return {
    type: GRID_NO_LIST,
    payload: axios.get('http://127.0.0.1:4010/api/Grid/GridNoList')
  }
}
