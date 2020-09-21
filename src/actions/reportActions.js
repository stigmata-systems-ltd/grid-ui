import { LIST_SUBCONTRACTOR_REPORT } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const fetchSCRReport = () => {
  return {
    type: LIST_SUBCONTRACTOR_REPORT,
    payload: axios.get(config.BASE_URL + '/api/Reports/SubContracorReport'),
  };
};
