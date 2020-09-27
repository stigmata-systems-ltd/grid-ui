import { LIST_DASHBOARD_DETAILS } from '../actions/types';

const initialState = {
  dashboardData: {},
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
      };
    case `${LIST_DASHBOARD_DETAILS}_REJECTED`:
      console.log(action);
      return {
        ...state,
      };
    default:
      return state;
  }
}
