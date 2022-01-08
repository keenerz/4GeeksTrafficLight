import React from "react";
import { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [hColor, setHColor] = React.useState("red");
	return (
		<div>
			<div id="trafficTop"></div>
			<div id="container">
				<div
					onClick={() => setHColor("red")}
					className={`red light ${
						hColor == "red" ? "selected" : ""
					}`}></div>
				<div
					onClick={() => setHColor("yellow")}
					className={`yellow light ${
						hColor == "yellow" ? "selected" : ""
					}`}></div>
				<div
					onClick={() => setHColor("green")}
					className={`green light ${
						hColor == "green" ? "selected" : ""
					}`}></div>
			</div>
		</div>
	);
};

export default Home;
