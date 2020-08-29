import React, { Component } from "react";

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
                                {/* <li class="nav-item">
                                    <a class="nav-link" id="sales-tab" data-toggle="tab" href="#sales" role="tab" aria-controls="sales" aria-selected="false">Sales</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link active" id="purchases-tab" data-toggle="tab" href="#purchases" role="tab" aria-controls="purchases" aria-selected="true">Purchases</a>
                                </li> */}
                            </ul>
                            <div class="tab-content py-0 px-0">
                                <div class="tab-pane fade active show" id="overview" role="tabpanel" aria-labelledby="overview-tab">
                                    <div class="d-flex flex-wrap justify-content-xl-between">
                                        <div class="d-none d-xl-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                            <i class="mdi mdi-calendar-heart icon-lg mr-3 text-primary"></i>
                                            <div class="d-flex flex-column justify-content-around">
                                                <small class="mb-1 text-muted">Total Grid</small>
                                                <div class="dropdown">
                                                    <a class="btn btn-secondary dropdown-toggle p-0 bg-transparent border-0 text-dark shadow-none font-weight-medium" href="#" role="button" id="dropdownMenuLinkA" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                        <h5 class="mb-0 d-inline-block">256</h5>
                                                    </a>
                                                    <div class="dropdown-menu" aria-labelledby="dropdownMenuLinkA">
                                                        <a class="dropdown-item" href="#">12 Aug 2018</a>
                                                        <a class="dropdown-item" href="#">22 Sep 2018</a>
                                                        <a class="dropdown-item" href="#">21 Oct 2018</a>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                            <i class="mdi mdi-currency-usd mr-3 icon-lg text-danger"></i>
                                            <div class="d-flex flex-column justify-content-around">
                                                <small class="mb-1 text-muted">Total Sub-Contractors</small>
                                                <h5 class="mr-2 mb-0">26</h5>
                                            </div>
                                        </div>
                                        <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                            <i class="mdi mdi-eye mr-3 icon-lg text-success"></i>
                                            <div class="d-flex flex-column justify-content-around">
                                                <small class="mb-1 text-muted">Completed Grids</small>
                                                <h5 class="mr-2 mb-0">50</h5>
                                            </div>
                                        </div>
                                        <div class="d-flex border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                            <i class="mdi mdi-download mr-3 icon-lg text-warning"></i>
                                            <div class="d-flex flex-column justify-content-around">
                                                <small class="mb-1 text-muted">In Progress Grids</small>
                                                <h5 class="mr-2 mb-0">15</h5>
                                            </div>
                                        </div>
                                        <div class="d-flex py-3 border-md-right flex-grow-1 align-items-center justify-content-center p-3 item">
                                            <i class="mdi mdi-flag mr-3 icon-lg text-danger"></i>
                                            <div class="d-flex flex-column justify-content-around">
                                                <small class="mb-1 text-muted">Yet To Start Grids</small>
                                                <h5 class="mr-2 mb-0">34</h5>
                                            </div>
                                        </div>
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