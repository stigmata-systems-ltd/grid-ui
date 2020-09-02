import React, { Component } from 'react';
import Conatiner from './Container';
class ContentLoader extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <Conatiner>
        <div class="main-panel">
          <div class="content-wrapper">{this.props.children}</div>
        </div>
      </Conatiner>
    );
  }
}

export default ContentLoader;
