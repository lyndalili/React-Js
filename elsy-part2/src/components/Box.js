import React from "react";

class Box extends React.Component {
	render() {
		console.log(this.props.value);
		const isWater = this.props.icon === "local_drink";

		return (
			<div
				className="box col-sm-3 col-6"
				style={{
					background:
						isWater &&
						`linear-gradient(0deg, rgba(0,123,255,1)  ${
							(this.props.value - 1.5) / 0.0125
						}%, rgba(74,204,255,1) 100%)`,
				}}
			>
				<span
					className={this.props.icon === "favorite" ? "material-icons scale" : "material-icons"}
					style={{
						fontSize: 100,
						color: this.props.color,
					}}
				>
					{this.props.icon}
				</span>

				<p>
					{this.props.value}
					{this.props.unit}
				</p>
				{/* {this.props.icon !== "local_drink" && this.props.icon !== "directions_walk" && (
					<input
						type="range"
						onChange={this.props.onChange}
						min={this.props.min}
						max={this.props.max}
						value={this.props.value}
					/>
				)}
				{this.props.icon === "directions_walk" && (
					<input
						type="range"
						onChange={this.props.onChange}
						min={this.props.min}
						max={this.props.max}
						value={this.props.value}
						step={1000}
					/>
				)} */}

				{this.props.icon !== "local_drink" && (
					<input
						type="range"
						onChange={this.props.onChange}
						min={this.props.min}
						max={this.props.max}
						value={this.props.value}
						step={this.props.icon === "directions_walk" ? 1000 : 1}
					/>
				)}
			</div>
		);
	}
}

export default Box;
