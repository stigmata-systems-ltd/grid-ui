import React, { Component } from 'react';

class FileInput extends Component {
  render() {
    return (
      <div class="col-md-6">
        <div class="form-group">
          <label>{this.props.label}</label>
          <input
            type="file"
            // name="img[]"
            class="file-upload-default"
            onChange={e => this.props.onChange(e)}
          />
          <div class="input-group col-xs-12">
            <input
              type="file"
              name="img[]"
              // class="file-upload-default"
              onChange={e => this.props.onChange(e)}
            />
            <span class="input-group-append">
              <button class="file-upload-browse btn btn-primary" type="button">
                Upload
              </button>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default FileInput;
