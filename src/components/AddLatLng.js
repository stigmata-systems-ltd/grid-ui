import React, { Component } from "react";
import FaIcon from "../common/FaIcon";
import IconButton  from "../common/forms/IconButton";

class AddLatLng extends Component {

    render() {
        return (
            <>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Latitude" />
                </div>
                <div class="col-sm-5">
                    <input type="text" class="form-control" placeholder="Longitude" />
                </div>
                <div class="col-sm-2">
                    <IconButton 
                        iconName="faTimesCircle"
                        onClick={this.props.onClick}
                    />
                </div>
            </>
        )
    }
}

export default AddLatLng;