import React, { Component } from "react";

class TabPane extends Component {

    render (){
        return(
            <div class={`tab-pane fade ${this.props.isActive && "active show"}`}>
                {this.props.children}
            </div>
        )
    }
}

export default TabPane;