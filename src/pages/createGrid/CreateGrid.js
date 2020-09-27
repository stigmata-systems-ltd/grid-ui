import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import AddLatLng from './AddLatLng';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';
import CustomAlert from '../../common/forms/customAlert';
import NumberInput from '../../common/forms/NumberInput';
import {
  Map,
  InfoWindow,
  Marker,
  GoogleApiWrapper,
  Polygon,
} from 'google-maps-react';
import { GMAP_API_KEY } from '../../utils/globalConst';
import CreateMap from './CreateMap';
import Loader from '../../common/Loader';
class CreateGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRows: [0],
      bounds: new this.props.google.maps.LatLngBounds(),
    };
  }
  componentDidMount() {
    this.props.resetGridForm();
  }

  handleDeleteLocationRow = () => {
    let { locationRows } = this.state;
    locationRows.pop();
    this.setState({ locationRows });
  };

  render() {
    return (
      <>
        {this.props.grid.isGridAddLoading && <Loader />}
        <ContentLoader>
          <FormContainer formTitle={'Create Grid'}>
            <div>
              {this.props.grid.gridAdd.message ? (
                <CustomAlert
                  variant={this.props.grid.variant}
                  message={this.props.grid.gridAdd.message}
                />
              ) : null}
            </div>
            <FormRow>
              <TextInput
                label="Grid Number"
                onChange={e =>
                  this.props.handleChangeGridNumber(e.target.value)
                }
                value={this.props.grid.gridNumber}
              />
              <NumberInput
                label="Grid Area"
                onChange={e => this.props.handleChangeGridArea(e.target.value)}
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
                        onLatChange={e =>
                          this.props.handleChangeLat(e.target.value, i)
                        }
                        onLongChange={e =>
                          this.props.handleChangeLong(e.target.value, i)
                        }
                        onLatLongRemove={i => this.props.handleLatLongRemove(i)}
                        index={i}
                        latValue={this.props.grid.gridLatLong[i].latitude}
                        longValue={this.props.grid.gridLatLong[i].longitude}
                      />
                    );
                  })}
                </div>
                <div class="form-group row">
                  <div class="col-sm-12">
                    <Button
                      btnText="Preview In Map"
                      btnType="primary"
                      onClick={() =>
                        this.props.handleMapPreview(this.state.bounds)
                      }
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
              onClick={() => this.props.createGrid(this.state.bounds)}
            />

            <Button
              btnText="Cancel"
              btnType="cancel"
              onClick={this.props.resetCreateGridData}
            />
          </FormContainer>
        </ContentLoader>
      </>
    );
  }
}
export default GoogleApiWrapper({
  apiKey: GMAP_API_KEY,
})(CreateGrid);
