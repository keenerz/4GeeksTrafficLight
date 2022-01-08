//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";

// include your styles into the webpack bundle
import "../styles/index.css";

//import your own components
import Home from "./component/home.jsx";

//render your react application
//state
// let hColor = "green";

// let setHighlightedColor = function (newValue) {
// 	hColor = newValue;
// 	//newValue = "green", "yellow", "red"
// };
// function TrafficLight(props) {
// 	return `<div class="container">
//         `;
// }

ReactDOM.render(<Home />, document.querySelector("#app"));
