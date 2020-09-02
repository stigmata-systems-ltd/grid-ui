import React, { Component } from "react";
import OverviewItems from "./OverviewItems";
import { overviewMetadata } from "./utils";

class TabContent extends Component {

    render() {
        return (
            <div class="row">
                <div class="col-md-12 grid-margin stretch-card">
                    <div class="card">
                        <div class="card-body dashboard-tabs p-0">
                            <ul class="nav nav-tabs px-4" role="tablist">
                                <li class="nav-item">
                                    <a class="nav-link" id="overview-tab" data-toggle="tab" href="#overview" role="tab" aria-controls="overview" aria-selected="false">Overview</a>
                                </li>
                            </ul>
                            <div class="tab-content py-0 px-0">
                                <div class="tab-pane fade active show" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div class="d-flex flex-wrap justify-content-xl-between">
                                        {overviewMetadata.map(item => <OverviewItems 
                                            title={item.title}
                                            number={item.number}
                                            iconName={item.iconName}
                                            color={item.color}
                                        />)}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default TabContent;