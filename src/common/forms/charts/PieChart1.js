import React, { Component } from "react";
import CanvasJSReact from "./canvasjs.react";
var CanvasJSChart = CanvasJSReact.CanvasJSChart;

class PieChart extends Component {

    render() {
        const options = {
			theme: "light",
			animationEnabled: true,
			exportFileName: "Grid Status",
			exportEnabled: true,
			title:{
				text: "Grid Status"
			},
			data: [{
				type: "pie",
				showInLegend: true,
				legendText: "{label}",
				toolTipContent: "{label}: <strong>{y}%</strong>",
				indexLabel: "{y}%",
				indexLabelPlacement: "inside",
				dataPoints: [
					{ y: 35, label: "Completed" },
					{ y: 35, label: "InProgress" },
					{ y: 30, label: "Yet To Start" }
				]
			}]
		}
        return (
            <div>
                <CanvasJSChart options = {options} />
            </div>
            
        )
    }
}

export default PieChart;