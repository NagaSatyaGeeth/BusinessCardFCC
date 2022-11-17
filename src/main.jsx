import React from "react";
import ReactDOM from "react-dom";
import App from "./About";
import Info from "./info";
import Footer from "./footer";
import "./main.css";

ReactDOM.createRoot(document.querySelector("#root")).render(
	<div className="wrapper">
		<App />
		<Info />
		<Footer />
	</div>
);
