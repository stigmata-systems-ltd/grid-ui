import { connect } from "react-redux";
import EditGrid from "../../pages/editGrid/editGrid";
import store from "../../store";
import { withRouter } from "react-router-dom";
import {
  editGrid,
  addLatLang,
  fetchGrid,
  gridNoList,
  fetchLayerDetails,
} from "../../actions/gridActions";
import {
  ADD_GRID,
  GRID_NUMBER,
  GRID_AREA,
  GRID_LAT,
  GRID_LANG,
  GRID_LATLANG,
  GRID_LATLONG_REMOVE,
  RESET_EDIT_GRID_FORM,
  SET_MAP_PREVIEW,
} from "../../actions/types";

const mapDispatchToProps = (dispatch, props) => {
  return {
    fetchGridNoData() {
      dispatch(gridNoList());
    },
    editGrid(bounds) {
      dispatch(editGrid(bounds)).then(() => {
        dispatch({ type: RESET_EDIT_GRID_FORM });
        props.history.push("/grid/view");
      });
    },
    resetEditGridData() {
      dispatch({ type: RESET_EDIT_GRID_FORM });
      props.history.push("/grid/view");
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
      dispatch({
        type: SET_MAP_PREVIEW,
        payload: {
          lat: parseFloat(latLng[0]),
          lng: parseFloat(latLng[1]),
        },
      });
    },
    addLatLang() {
      dispatch(addLatLang());
    },
    onGridNoChange(value) {
      dispatch({
        type: GRID_NUMBER,
        payload: value,
      });
      this.setSingleGridDetails();
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
    setSingleGridDetails() {
      const grid = store.getState().grid;
      dispatch(fetchGrid(grid.gridNumber));
      dispatch(fetchLayerDetails(grid.gridNumber));
    },
  };
};

const mapStateToProps = (state) => {
  const grid = store.getState().grid;
  return {
    grid,
  };
};

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(EditGrid)
);
