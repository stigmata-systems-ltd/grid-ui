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
  fetch('http://127.0.0.1:4010/api/Grid/GridNoList', {
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  })
    .then(res => res.json())
    .then(posts =>
      dispatch({
        type: GRID_NO_LIST,
        payload: posts,
      })
    );
};
