import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import SearchableDropDown from '../../common/forms/SearchableDropDown';
import { ImageGroup, Image } from "react-fullscreen-image";
import {
  transformLayerList,
} from './utils';
import { transformGridList } from '../../utils/dataTransformer';

import { gridNumber, layers, images } from "./utils";

class Cleaning extends Component {
  constructor() {
    super();
    this.state = {
      selectedGrid: 0,
    };
  }
  handleGridSelection = (e) => {
    this.setState({ selectedLayer: e.target.value });
  };

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5>Layer Photographs</h5>
          <br />
          <FormRow>
            <SearchableDropDown
              size="col-md-6"
              label="Grid Number"
              selectOptions={transformGridList(this.props.grid.gridNoData)}
              onChange={(value) => this.props.handleGridNoChangePhoto(value)}
              value={this.props.grid.photoGridNum}
            />
            <SearchableDropDown
              label="Layer Number"
              size="col-md-6"
              selectOptions={transformLayerList(this.props.grid.LayerNoData)}
              onChange={(value) => this.props.handleLayerNoChangePhoto(value)}
              value={this.props.grid.photoLayerNum}
            />
          </FormRow>
          <ImageGroup>
            <ul className="images">
              {images.map((i) => (
                <li key={i}>
                  <Image
                    src={i}
                    alt="nature"
                    style={{
                      position: "absolute",
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: "100%",
                      width: "100%",
                      objectFit: "cover",
                    }}
                  />
                </li>
              ))}
            </ul>
          </ImageGroup>
        </div>
      </div>
    );
  }
}

export default Cleaning;
