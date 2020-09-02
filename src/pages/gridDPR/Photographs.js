import React, { Component } from 'react';
import FormRow from '../../common/forms/FormRow';
import SimpleDropDown from '../../common/forms/SimpleDropDown';
import { ImageGroup, Image } from 'react-fullscreen-image';

import { gridNumber, layers, images } from './utils';

class Cleaning extends Component {
  constructor() {
    super();
    this.state = {
      selectedGrid: 0,
    };
  }
  handleGridSelection = e => {
    this.setState({ selectedLayer: e.target.value });
  };

  render() {
    return (
      <div class="card">
        <div class="card-body">
          <h5>Layer Photographs</h5>
          <FormRow>
            <SimpleDropDown
              label="Grid Number"
              selectOptions={gridNumber}
              onChange={this.handleGridSelection}
              value={this.state.selectedGrid}
            />
            <SimpleDropDown
              label="Layer Number"
              selectOptions={layers}
              onChange={this.handleLayerSelection}
              value={this.state.selectedLayer}
            />
          </FormRow>
          <ImageGroup>
            <ul className="images">
              {images.map(i => (
                <li key={i}>
                  <Image
                    src={i}
                    alt="nature"
                    style={{
                      position: 'absolute',
                      top: 0,
                      left: 0,
                      right: 0,
                      bottom: 0,
                      height: '100%',
                      width: '100%',
                      objectFit: 'cover',
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
