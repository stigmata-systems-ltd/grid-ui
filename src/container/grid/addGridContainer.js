import { connect } from "react-redux";
import CreateGrid from "../../pages/createGrid/CreateGrid";
import store from "../../store";
import { addGrid, addLatLang, createGrid } from "../../actions/gridActions";
import {
  ADD_GRID,
  GRID_NUMBER,
  GRID_AREA,
  GRID_LAT,
  GRID_LANG,
  GRID_LATLANG,
  GRID_LATLONG_REMOVE,
  RESET_CREATE_GRID_FORM,
  SET_MAP_PREVIEW,
} from "../../actions/types";

const mapDispatchToProps = (dispatch) => {
  return {
    resetGridForm() {
      dispatch({ type: RESET_CREATE_GRID_FORM });
    },
    createGrid(bounds) {
      dispatch(createGrid(bounds)).then(() => {
        dispatch({ type: RESET_CREATE_GRID_FORM });
      });
    },
    handleMapPreview(bounds, maps) {
      const grid = store.getState().grid;
      let points = [];
      grid.gridLatLong.map((item) => {
        points.push({
          lat: item.latitude,
          lng: item.longitude,
        });
      });

      for (var i = 0; i < points.length; i++) {
        bounds.extend(points[i]);
      }
      const center = bounds.getCenter();
      let latLng = center.toString().replace("(", "");
      latLng = latLng.replace(")", "");
      latLng = latLng.replace(" ", "");
      latLng = latLng.replace(" ", "");
      latLng = latLng.split(",");
      // maps.panTo({
      //   lat: parseFloat(latLng[0]),
      //   lng: parseFloat(latLng[1]),
      // });
      dispatch({
        type: SET_MAP_PREVIEW,
        payload: {
          lat: parseFloat(latLng[0]),
          lng: parseFloat(latLng[1]),
        },
      });
    },
    resetCreateGridData() {
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
      grid.gridLatLong[i].latitude = parseFloat(value);
      dispatch({
        type: GRID_LATLANG,
        payload: grid.gridLatLong,
      });
    },
    handleChangeLong(value, i) {
      const grid = store.getState().grid;
      const length = grid.gridLatLong.length;
      grid.gridLatLong[i].longitude = parseFloat(value);

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

const mapStateToProps = (state) => {
  const grid = store.getState().grid;
  return {
    grid,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateGrid);
