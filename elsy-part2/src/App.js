import React from "react";
import Box from "./components/Box";
import "./styles/global.css";

const tempMin = -20;
const tempMax = 40;
const heartMin = 80;
const heartMax = 180;
const stepsMin = 0;
const stepsMax = 50000;

class App extends React.Component {
	constructor() {
		super();
		this.state = {
			water: 1.5,
			heart: 120,
			temperature: -10,
			steps: 3000,
		};
	}

	onHeartChange = (e) => {
		this.setState({ heart: Number(e.target.value) }, () => {
			this.calculateWater();
		});
	};

	onStepsChange = (e) => {
		this.setState({ steps: Number(e.target.value) }, () => {
			this.calculateWater();
		});
	};

	onTemperatureChange = (e) => {
		this.setState({ temperature: Number(e.target.value) }, () => {
			this.calculateWater();
		});
	};

	calculateWater = () => {
		let calculWater = 1.5;
		console.log(this.state.temperature, this.state.heart, this.state.steps);

		if (this.state.temperature > 20) {
			calculWater += (this.state.temperature - 20) * 0.02;
		}

		if (this.state.heart > 120) {
			calculWater += (this.state.heart - 120) * 0.0008;
		}

		if (this.state.steps > 10000) {
			calculWater += (this.state.steps - 10000) * 0.00002;
		}

		this.setState({ water: calculWater.toFixed(2) });
	};

	render() {
		return (
			<div className="container-fluid">
				<div className="row">
					<Box icon="local_drink" color="#0037ff" value={this.state.water} unit="L" />

					<Box
						icon="directions_walk"
						color="black"
						value={this.state.steps}
						unit="steps"
						onChange={this.onStepsChange}
						min={stepsMin}
						max={stepsMax}
					/>

					<Box
						icon="favorite"
						color="red"
						unit="bpm"
						onChange={this.onHeartChange}
						min={heartMin}
						max={heartMax}
						value={this.state.heart}
					/>

					<Box
						icon="wb_sunny"
						color="yellow"
						unit="°C"
						onChange={this.onTemperatureChange}
						min={tempMin}
						max={tempMax}
						value={this.state.temperature}
					/>
				</div>
			</div>
		);
	}
}

export default App;
