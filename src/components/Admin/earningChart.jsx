import React, { Component } from 'react';
import CanvasJSReact from '@canvasjs/react-charts';
//var CanvasJSReact = require('@canvasjs/react-charts');
 
var CanvasJS = CanvasJSReact.CanvasJS;
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
class App extends Component {
	render() {
		const options = {
			animationEnabled: true,
			title:{
				text: "Monthly Earning - 2023"
			},
			axisX: {
				valueFormatString: "MMM"
			},
			axisY: {
				title: "",
				prefix: ""
			},
			data: [{
				yValueFormatString: "#,###",
				xValueFormatString: "MMMM",
				type: "spline",
				dataPoints: [
					{ x: new Date(2023, 0), y: 10000 },
					{ x: new Date(2023, 1), y: 12000 },
					{ x: new Date(2023, 2), y: 15000 },
					{ x: new Date(2023, 3), y: 16000 },
					{ x: new Date(2023, 4), y: 18000 },
					{ x: new Date(2023, 5), y: 15000 },
					{ x: new Date(2023, 6), y: 16000 },
					{ x: new Date(2023, 7), y: 19000 },
					{ x: new Date(2023, 8), y: 17000 },
					{ x: new Date(2023, 9), y: 16000 },
					{ x: new Date(2023, 10), y: 19000 },
					{ x: new Date(2023, 11), y: 20000 }
				]
			}]
		}
		return (
		<div>
			<CanvasJSChart options = {options}
				/* onRef={ref => this.chart = ref} */
			/>
			{/*You can get reference to the chart instance as shown above using onRef. This allows you to access all chart properties and methods*/}
		</div>
		);
	}
}
export default App;        