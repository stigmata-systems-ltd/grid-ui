import { LIST_SUBCONTRACTOR_REPORT, LIST_MASTER_REPORT } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const fetchSCRReport = () => {
  const reports = store.getState().reports;
  return {
    type: LIST_SUBCONTRACTOR_REPORT,
    payload: axios.get(
      config.BASE_URL +
        '/api/Reports/SubContracorReport?startDate=' +
        reports.fromDateSCR +
        '&endDate=' +
        reports.toDateSCR
    ),
  };
};

export const fetchMasterReport = () => {
  const reports = store.getState().reports;

  return {
    type: LIST_MASTER_REPORT,
    payload: axios.get(
      config.BASE_URL +
        '/api/Reports/MasterReport?startDate=' +
        reports.fromDateMaster +
        '&endDate=' +
        reports.toDateMaster
    ),
  };
};
