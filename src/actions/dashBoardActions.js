import { LIST_DASHBOARD_DETAILS } from './types';
import store from '../store';
import axios from 'axios';
import config from '../config';

export const fetchDashBoardData = () => {
  const db = store.getState().db;

  return {
    type: LIST_DASHBOARD_DETAILS,
    payload: axios.get(
      config.BASE_URL +
        '/api/Reports/DashboardSummary?isTillDate=' +
        db.tillDateCheck +
        '&isYearly=' +
        db.yearCheck +
        '&isMonthly=' +
        db.monthCheck
    ),
  };
};