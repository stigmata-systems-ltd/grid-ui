import React, { Component } from "react";
import ContentLoader from "../../common/ContentLoader";
import FormContainer from "../../common/forms/FormContainer";
import FormRow from "../../common/forms/FormRow";
import TextInput from "../../common/forms/TextInput";
import AddLatLng from "../createGrid/AddLatLng";
import IconTextButton from "../../common/forms/IconTextButton";
import Button from "../../common/forms/Button";
import CustomAlert from "../../common/forms/customAlert";
import SimpleDropDown from "../../common/forms/SimpleDropDown";
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from "google-maps-react";
import { GMAP_API_KEY } from "../../utils/globalConst";
import CreateMap from "../../pages/createGrid/CreateMap";

class CreateGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRows: [0],
      bounds: new this.props.google.maps.LatLngBounds(),
    };
  }

  handleDeleteLocationRow = () => {
    let { locationRows } = this.state;
    locationRows.pop();
    this.setState({ locationRows });
  };

  componentDidMount() {
    this.props.fetchGridNoData();
    this.props.handleMapPreview(this.state.bounds);
  }

  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={"Edit Grid"}>
          <div>
            {this.props.grid.editGrid.message ? (
              <CustomAlert
                variant={this.props.grid.variant}
                message={this.props.grid.editGrid.message}
              />
            ) : null}
          </div>
          <FormRow>
            <TextInput
              label="Grid Number"
              onChange={(e) => this.props.onGridNoChange(e.target.value)}
              value={this.props.grid.gridNumber}
            />
            {/* <SimpleDropDown
              label="Select Grid"
              selectOptions={this.props.grid.gridNoData}
              onChange={e => this.props.onGridNoChange(e.target.value)}
            /> */}
            <TextInput
              label="Grid Area"
              onChange={(e) => this.props.handleChangeGridArea(e.target.value)}
              value={this.props.grid.gridArea}
            />
          </FormRow>
          <FormRow>
            <div class="col-md-6">
              <div class="form-group row">
                <div class="col-sm-8">
                  <IconTextButton
                    btnText="Add Location"
                    onClick={this.props.addLatLang}
                  />
                </div>
              </div>
              <div class="form-group row location-row">
                {this.props.grid.gridLatLong.map((e, i) => {
                  return (
                    <AddLatLng
                      // onClick={this.handleDeleteLocationRow}
                      onLatChange={(e) =>
                        this.props.handleChangeLat(e.target.value, i)
                      }
                      onLongChange={(e) =>
                        this.props.handleChangeLong(e.target.value, i)
                      }
                      onLatLongRemove={(i) => this.props.handleLatLongRemove(i)}
                      index={i}
                      latValue={this.props.grid.gridLatLong[i].latitude}
                      longValue={this.props.grid.gridLatLong[i].longitude}
                    />
                  );
                })}
              </div>
              <div class="form-group row">
                <div class="col-sm-12">
                  <Button btnText="Preview In Map" btnType="primary" 
                    onClick={() => this.props.handleMapPreview(this.state.bounds)}
                  />
                </div>
              </div>
            </div>
            <div class="col-md-6 stretch-card">
              <div class="card">
                <div class="card-body map-height">
                  <CreateMap {...this.props} />
                </div>
              </div>
            </div>
          </FormRow>
          <Button
            btnText="Save"
            btnType="primary"
            onClick={() => this.props.editGrid(this.state.bounds)}
          />
          <Button btnText="Cancel" btnType="cancel" 
          onClick={this.props.resetEditGridData}
           />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default GoogleApiWrapper({
  apiKey: GMAP_API_KEY,
})(CreateGrid);
