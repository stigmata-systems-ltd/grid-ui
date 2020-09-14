import { GRID_NUMBER } from './types';
import axios from 'axios';
import config from '../config';
export const gridNumber = () => {
    return {
        type: GRID_NUMBER,
        payload: axios.get(config.BASE_URL + '/api/Grid/GridList'),
    };
};