import React, { Component } from "react";

class LineChart extends Component {
    render() {
        return (
            <>
                <div class="chartjs-size-monitor-expand"><div class=""></div></div><div class="chartjs-size-monitor-shrink"><div class=""></div></div>
                <p class="mb-4">To start a blog, think of a topic about and first brainstorm party is ways to write details</p>
                <div id="cash-deposits-chart-legend" class="d-flex justify-content-center pt-3"><ul class="dashboard-chart-legend"><li><span style={{ backgroundColor: "#ff4747" }}></span>Returns</li><li><span style={{ backgroundColor: "#4d83ff" }}></span>Sales</li></ul></div>
                <canvas id="cash-deposits-chart" width="372" height="186" class="chartjs-render-monitor"></canvas>
            </>
        )
    }
}

export default LineChart;