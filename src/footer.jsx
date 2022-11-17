import React from "react";
import "./footer.css";
import twitterIcon from "/src/assets/Twitter Icon.png";
import fbIcon from "/src/assets/Facebook Icon.png";
import igIcon from "/src/assets/Instagram Icon.png";
import ghIcon from "/src/assets/GitHub Icon.png";

const footer = () => {
	return (
		<footer className="footer">
			<img className="social-icon" src={twitterIcon}></img>
			<img className="social-icon" src={fbIcon}></img>
			<img className="social-icon" src={igIcon}></img>
			<img className="social-icon" src={ghIcon}></img>
		</footer>
	);
};

export default footer;
