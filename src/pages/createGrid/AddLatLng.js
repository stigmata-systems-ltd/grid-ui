import React, { Component } from 'react';
import FaIcon from '../../common/FaIcon';
import IconButton from '../../common/forms/IconButton';

class AddLatLng extends Component {
  render() {
    return (
      <>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            placeholder="Latitude"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onLatChange(e, this.props.index)}
            value={this.props.latValue}
          />
        </div>
        <div class="col-sm-5">
          <input
            type="text"
            class="form-control"
            placeholder="Longitude"
            name={this.props.index}
            id={this.props.index}
            onChange={e => this.props.onLongChange(e, this.props.index)}
            value={this.props.longValue}
          />
        </div>
        <div class="col-sm-2">
          <IconButton
            iconName="faTimesCircle"
            index={this.props.index}
            onClick={() => this.props.onLatLongRemove(this.props.index)}
          />
        </div>
      </>
    );
  }
}

export default AddLatLng;
