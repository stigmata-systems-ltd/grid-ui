import { connect } from 'react-redux';
import CreateGrid from '../../pages/createGrid/CreateGrid';
import store from '../../store';
import { addGrid, addLatLang, createGrid } from '../../actions/gridActions';
import {
  ADD_GRID,
  GRID_NUMBER,
  GRID_AREA,
  GRID_LAT,
  GRID_LANG,
  GRID_LATLANG,
  GRID_LATLONG_REMOVE,
  RESET_CREATE_GRID_FORM,
} from '../../actions/types';

const mapDispatchToProps = dispatch => {
  return {
    createGrid() {
      dispatch(createGrid());
      dispatch({ type: RESET_CREATE_GRID_FORM });
    },
    addLatLang() {
      dispatch(addLatLang());
    },
    handleChangeGridNumber(value) {
      dispatch({
        type: GRID_NUMBER,
        payload: value,
      });
    },
    handleChangeGridArea(value) {
      dispatch({
        type: GRID_AREA,
        payload: value,
      });
    },
    handleChangeLat(value, i) {
      const grid = store.getState().grid;
      const length = grid.gridLatLong.length;
      grid.gridLatLong[i].latitude = parseInt(value);
      dispatch({
        type: GRID_LATLANG,
        payload: grid.gridLatLong,
      });
    },
    handleChangeLong(value, i) {
      const grid = store.getState().grid;
      const length = grid.gridLatLong.length;
      grid.gridLatLong[i].longitude = parseInt(value);

      dispatch({
        type: GRID_LATLANG,
        payload: grid.gridLatLong,
      });
    },
    handleLatLongRemove(i) {
      const grid = store.getState().grid;
      const gridLatLong = [...grid.gridLatLong];
      gridLatLong.splice(i, 1);
      dispatch({
        type: GRID_LATLONG_REMOVE,
        payload: gridLatLong,
      });
    },
  };
};

const mapStateToProps = state => {
  const grid = store.getState().grid;
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGrid);
