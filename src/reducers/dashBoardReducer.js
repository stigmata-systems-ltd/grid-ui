import {
  LIST_DASHBOARD_DETAILS,
  YEAR_CHECK,
  SIX_MONTH_CHECK,
  MONTH_CHECK,
  TILLDATE_CHECK,
  LIST_DASHBOARD_MAP_DETAILS,
  SET_DB_FROM_DATE,
  SET_DB_TO_DATE,
  DASHBOARD_GRID_LIST,
  ON_CHANGE_GRID,
  GRID_DETAILS_BY_ID,
} from "../actions/types";

const initialState = {
  dashboardData: {},
  yearCheck: false,
  sixMonthCheck: false,
  monthCheck: false,
  tillDateCheck: false,
  listMapData: {},
  customDateFrom: "",
  customDateTo: "",
  gridList: [],
  activeGrid: {},
  initialCenter: {
    lat: 18.974770806142327,
    lng: 72.80579222485957,
  },
  zoom: 16,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case `${LIST_DASHBOARD_DETAILS}_FULFILLED`:
      const result = action.payload.data;
      const dashboardData = {
        totalGrid: result.totalGrid,
        completedGrid: result.completedGrid,
        inProgresssGrid: result.inProgresssGrid,
        newGrid: result.newGrid,
        totalLayer: result.totalLayer,
        completedLayer: result.completedLayer,
        inProgressLayer: result.inProgressLayer,
        billedLayer: result.billedLayer,
        unBilledLayer: result.unBilledLayer,
        newLayer: result.newLayer,
      };
      return {
        ...state,
        dashboardData,
        isListDashboardDetailsLoading: false,
        zoom: 16,
      };
    case `${LIST_DASHBOARD_DETAILS}_PENDING`:
      return {
        ...state,
        isListDashboardDetailsLoading: true,
      };
    case `${LIST_DASHBOARD_DETAILS}_REJECTED`:
      return {
        ...state,
        isListDashboardDetailsLoading: false,
      };
    case `${LIST_DASHBOARD_MAP_DETAILS}_FULFILLED`:
      return {
        ...state,
        listMapData: action.payload.data,
        initialCenter: {
          lat: action.payload.data.gLatitide,
          lng: action.payload.data.gLongitude,
        },
        isListDashboardMapDetailsLoading: false,
      };
    case `${LIST_DASHBOARD_MAP_DETAILS}_PENDING`:
      return {
        ...state,
        isListDashboardMapDetailsLoading: true,
      };
    case `${LIST_DASHBOARD_MAP_DETAILS}_REJECTED`:
      return {
        ...state,
        listMapData: "",
        isListDashboardMapDetailsLoading: false,
      };

    case YEAR_CHECK:
      return {
        ...state,
        yearCheck: true,
        sixMonthCheck: false,
        monthCheck: false,
        tillDateCheck: false,
        customDateFrom: "",
        customDateTo: "",
      };
    case SIX_MONTH_CHECK:
      return {
        ...state,
        yearCheck: false,
        sixMonthCheck: true,
        monthCheck: false,
        tillDateCheck: false,
        customDateFrom: "",
        customDateTo: "",
      };
    case MONTH_CHECK:
      return {
        ...state,
        yearCheck: false,
        sixMonthCheck: false,
        monthCheck: true,
        tillDateCheck: false,
        customDateFrom: "",
        customDateTo: "",
      };
    case TILLDATE_CHECK:
      return {
        ...state,
        yearCheck: false,
        sixMonthCheck: false,
        monthCheck: false,
        tillDateCheck: true,
        customDateFrom: "",
        customDateTo: "",
      };
    case SET_DB_FROM_DATE:
      return {
        ...state,
        customDateFrom: action.payload,
        yearCheck: false,
        sixMonthCheck: false,
        monthCheck: false,
        tillDateCheck: false,
      };
    case SET_DB_TO_DATE:
      return {
        ...state,
        customDateTo: action.payload,
        yearCheck: false,
        sixMonthCheck: false,
        monthCheck: false,
        tillDateCheck: false,
      };
    case `${DASHBOARD_GRID_LIST}_FULFILLED`:
      return {
        ...state,
        gridList: action.payload.data,
      };
    case ON_CHANGE_GRID:
      return {
        ...state,
        activeGrid: action.payload,
        zoom: 19,
      };
    case `${GRID_DETAILS_BY_ID}_FULFILLED`:
      return {
        ...state,
        panCenter: {
          lat: action.payload.data.marker_latitide,
          lng: action.payload.data.marker_longitude,
        },
      };
    default:
      return state;
  }
}
