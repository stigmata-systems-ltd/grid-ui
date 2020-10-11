import React, { Component } from "react";
import FormRow from "../../common/forms/FormRow";
import SearchableDropDown from "../../common/forms/SearchableDropDown";
import { ImageGroup, Image } from "react-fullscreen-image";
import { transformLayerList } from "../gridDPR/utils";
import Label from "../../common/forms/Label";
import Loader from "../../common/Loader";

import { getLayerImages } from "./utils";

class Cleaning extends Component {
  constructor() {
    super();
    this.state = {
      selectedGrid: 0,
    };
  }

  render() {
    return (
      <>
        {this.props.grid.photoLoading && <Loader />}
        <div class="card">
          <div class="card-body">
            <h5>Layer Photographs</h5>
            <br />
            <FormRow>
              <Label
                label="Grid Number"
                readOnly="test"
                value={this.props.grid.gridNumber}
              />
              <SearchableDropDown
                label="Layer Number"
                size="col-md-6"
                selectOptions={transformLayerList(
                  this.props.grid.layerListPhoto
                )}
                onChange={(value) => this.props.handleChangeLayerNumber(value)}
                value={this.props.grid.photoLayerNum}
              />
            </FormRow>
            {/* <ImageGroup>
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
          </ImageGroup> */}
          {this.props.grid.layerPhotos && this.props.grid.layerPhotos.length > 0 &&
            <div class="row">
              {getLayerImages(this.props.grid.layerPhotos[0].layerDocs).map(
                (i) => (
                  <div class="col-md-4">
                    <img src={i} alt={i} style={{ width: "100%" }} />
                  </div>
                )
              )}
              {console.log("test",this.props.grid.layerPhotos[0].layerDocs)}
            </div>}
          </div>
        </div>
      </>
    );
  }
}

export default Cleaning;
