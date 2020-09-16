import React, { Component } from "react";

class Divider extends Component {
    render() {
        return(
            <div style={{marginTop: `${this.props.height}%`}}></div>
        ) 
    }
}
export default Divider;