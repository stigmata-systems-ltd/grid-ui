import React, { Component } from "react";
import FaIcon from "../../common/FaIcon";
class OverviewItems extends Component {

    render() {
        return (
            <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                <i class="mdi mdi-currency-usd "></i>
                <FaIcon 
                    iconName={this.props.iconName}
                    size="lg"
                    className={`mr-3 icon-lg ${this.props.color}`}
                />
                <div class="d-flex flex-column justify-content-around">
                    {console.log("both",this.props.both)}
                    {this.props.title.includes("Billed") === true ?
                    <h5 class="mr-2 mb-1">{this.props.title}</h5>:
                    <small class="mb-1 text-muted">{this.props.title}</small>}
                    <h5 class="mr-2 mb-0">{this.props.number}</h5>
                </div>
            </div>
        )
    }
}

export default OverviewItems;