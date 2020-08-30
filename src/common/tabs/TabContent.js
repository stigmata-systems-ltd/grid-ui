import React, { Component } from "react";

class TabContent extends Component {

    render (){
        return(
            <div class="tab-content py-0 px-0">
                {this.props.children}
            </div>
        )
    }
}

export default TabContent;