import React, { Component } from "react";
import { Chart } from "react-google-charts";

const data = [
  ["Year", "Sales", "Expenses"],
  ["2004", 1000, 400],
  ["2005", 1170, 460],
  ["2006", 660, 1120],
  ["2007", 1030, 540],
];
const options = {
  title: "Grid Status",
  curveType: "function",
  legend: { position: "bottom" },
};

class LineChart extends Component {
  render() {
    return (
      <Chart
        width={"100%"}
        height={"500px"}
        chartType="LineChart"
        loader={<div>Loading Chart</div>}
        data={[
          ["x", "Completed", "Billed"],
          [0, 0, 0],
          [1, 10, 5],
          [2, 23, 15],
          [3, 17, 9],
          [4, 18, 10],
          [5, 9, 5],
          [6, 11, 3],
          [7, 27, 19],
        ]}
        options={{
          hAxis: {
            title: "Months",
          },
          vAxis: {
            title: "Layers",
          },
          series: {
            1: { curveType: "function" },
          },
        }}
        rootProps={{ "data-testid": "2" }}
      />
    );
  }
}

export default LineChart;
