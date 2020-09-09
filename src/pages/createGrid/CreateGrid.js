import React, { Component } from 'react';
import ContentLoader from '../../common/ContentLoader';
import FormContainer from '../../common/forms/FormContainer';
import FormRow from '../../common/forms/FormRow';
import TextInput from '../../common/forms/TextInput';
import AddLatLng from './AddLatLng';
import IconTextButton from '../../common/forms/IconTextButton';
import Button from '../../common/forms/Button';

class CreateGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      locationRows: [0],
    };
  }

  // handleLocationRows = () => {
  //   let { locationRows } = this.state;
  //   locationRows.push(locationRows.length);
  //   console.log(locationRows);
  //   this.setState({ locationRows });
  // };
  handleDeleteLocationRow = () => {
    let { locationRows } = this.state;
    locationRows.pop();
    this.setState({ locationRows });
  };

  render() {
    return (
      <ContentLoader>
        <FormContainer formTitle={'Create Grid'}>
          <FormRow>
            <TextInput
              label="Grid Number"
              onChange={e => this.props.handleChangeGridNumber(e.target.value)}
              value={this.props.grid.gridNumber}
            />
            <TextInput
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
                  console.log(`Index in Create Grid: ${e} ${i}`);

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
                  <Button btnText="Preview In Map" btnType="primary" />
                </div>
              </div>
            </div>
            <div class="col-md-6 stretch-card">
              <div class="card">
                <div class="card-body">
                  <h4 class="card-title">Map</h4>
                </div>
              </div>
            </div>
          </FormRow>
          <Button
            btnText="Save"
            btnType="primary"
            onClick={this.props.createGrid}
          />
          <Button btnText="Cancel" btnType="cancel" />
        </FormContainer>
      </ContentLoader>
    );
  }
}

export default CreateGrid;
