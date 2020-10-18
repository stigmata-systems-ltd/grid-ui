import {
  LIST_DASHBOARD_DETAILS,
  LIST_DASHBOARD_MAP_DETAILS,
  DASHBOARD_GRID_LIST,
  GRID_DETAILS_BY_ID,
} from "./types";
import store from "../store";
import axios from "axios";
import config from "../config";

export const fetchDashBoardData = () => {
  const db = store.getState().db;

  return {
    type: LIST_DASHBOARD_DETAILS,
    payload: axios.get(
      config.BASE_URL +
        "/api/Reports/DashboardSummary?isTillDate=" +
        db.tillDateCheck +
        "&isYearly=" +
        db.yearCheck +
        "&isMonthly=" +
        db.monthCheck +
        "&startDate=" +
        db.customDateFrom +
        "&endDate=" +
        db.customDateTo
    ),
  };
};

export const fetchDashBoardMapData = () => {
  return {
    type: LIST_DASHBOARD_MAP_DETAILS,
    payload: axios.get(config.BASE_URL + "/api/Reports/GridProgressMap"),
  };
};

export const getGridList = () => {
  return {
    type: DASHBOARD_GRID_LIST,
    payload: axios.get(config.BASE_URL + "/api/Grid/GridNoList"),
  };
};

export const getGridDetailsById = (id) => {
  return {
    type: GRID_DETAILS_BY_ID,
    payload: axios.get(config.BASE_URL + "/api/Grid/GridDetailsById?id="+id),
  };
};
