import React, { Component } from 'react';
import Col6 from './Col6';

class FileInput extends Component {
  render() {
    return (
      <Col6 size={this.props.size}>
        <div class="form-group">
          <label>{this.props.label}</label>
          
          <div class="input-group col-xs-12">
            <input
              type="file"
              name="img[]"
              // class="file-upload-default"
              onChange={e => this.props.onChange(e)}
              class="form-control"
              style={{padding: 7}}
            />
            <span class="input-group-append">
              <button class="file-upload-browse btn btn-primary upload-btn-fix" type="button">
                Upload
              </button>
            </span>
          </div>
        </div>
      </Col6>
    );
  }
}

export default FileInput;
