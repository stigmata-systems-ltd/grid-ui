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
          <h5>Layer Photographs</h5><br />
          <FormRow>
            <SimpleDropDown
              label="Grid Number"
              selectOptions={gridNumber}
            // onChange={this.handleGridSelection}
            // value={this.state.selectedGrid}
            />
            <SimpleDropDown
              label="Layer Number"
              selectOptions={layers}
            // onChange={this.handleLayerSelection}
            // value={this.state.selectedLayer}
            />
          </FormRow>
          <ImageGroup>
            {/* Arun Image Code */}

            {images.map(i => (
              <div className="row">
                <div className="col col-lg-12">
                  <div className="row" >

                    <div className="col col-md-3" key={i}>
                      <div className="form-group">
                        <Image
                          src={i}
                          alt="nature"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '300%',
                            width: '80%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>

                    </div>
                    <div className="col col-md-3" key={i}>
                      <div className="form-group">
                        <Image
                          src={i}
                          alt="nature"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '300%',
                            width: '80%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>

                    </div>
                    <div className="col col-md-3" key={i}>
                      <div className="form-group">
                        <Image
                          src={i}
                          alt="nature"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '300%',
                            width: '80%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>

                    </div>
                    <div className="col col-md-3" key={i}>
                      <div className="form-group">
                        <Image
                          src={i}
                          alt="nature"
                          style={{
                            position: 'absolute',
                            top: 0,
                            left: 0,
                            right: 0,
                            bottom: 0,
                            height: '300%',
                            width: '80%',
                            objectFit: 'cover',
                          }}
                        />
                      </div>
                    </div>


                  </div>
                </div>
              </div>
            ))}

          </ImageGroup>
        </div>
      </div>
    );
  }
}

export default Cleaning;
