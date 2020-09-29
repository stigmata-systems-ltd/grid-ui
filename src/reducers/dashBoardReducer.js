import {
  LIST_DASHBOARD_DETAILS,
  YEAR_CHECK,
  SIX_MONTH_CHECK,
  MONTH_CHECK,
  TILLDATE_CHECK,
  LIST_DASHBOARD_MAP_DETAILS,
} from '../actions/types';

const initialState = {
  dashboardData: {},
  yearCheck: false,
  sixMonthCheck: false,
  monthCheck: false,
  tillDateCheck: false,
  listMapData: {},
};

export default function(state = initialState, action) {
  console.log(`PM Actions ${action.type}`);
  switch (action.type) {
    case `${LIST_DASHBOARD_DETAILS}_FULFILLED`:
      console.log(`List SCR: ${action.payload.data}`);
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
      };
    case `${LIST_DASHBOARD_DETAILS}_PENDING`:
      console.log(action);
      return {
        ...state,
        isListDashboardDetailsLoading: true,
      };
    case `${LIST_DASHBOARD_DETAILS}_REJECTED`:
      console.log(action);
      return {
        ...state,
        isListDashboardDetailsLoading: false,
      };
    case `${LIST_DASHBOARD_MAP_DETAILS}_FULFILLED`:
      console.log(action);
      return {
        ...state,
        listMapData: action.payload.data,
        isListDashboardMapDetailsLoading: false,
      };
    case `${LIST_DASHBOARD_MAP_DETAILS}_PENDING`:
      console.log(action);
      return {
        ...state,
        isListDashboardMapDetailsLoading: true,
      };
    case `${LIST_DASHBOARD_MAP_DETAILS}_REJECTED`:
      console.log(action);
      return {
        ...state,
        listMapData: '',
        isListDashboardMapDetailsLoading: false,
      };

    case YEAR_CHECK:
      console.log(action);
      return {
        ...state,
        yearCheck: true,
        sixMonthCheck: false,
        monthCheck: false,
        tillDateCheck: false,
      };
    case SIX_MONTH_CHECK:
      console.log(action);
      return {
        ...state,
        yearCheck: false,
        sixMonthCheck: true,
        monthCheck: false,
        tillDateCheck: false,
      };
    case MONTH_CHECK:
      console.log(action);
      return {
        ...state,
        yearCheck: false,
        sixMonthCheck: false,
        monthCheck: true,
        tillDateCheck: false,
      };
    case TILLDATE_CHECK:
      console.log(action);
      return {
        ...state,
        yearCheck: false,
        sixMonthCheck: false,
        monthCheck: false,
        tillDateCheck: true,
      };
    default:
      return state;
  }
}
