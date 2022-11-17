import React from "react";
import "./About.css";

export default function About() {
	return (
		<section className="personalInfo">
			<img className="profilePic" src="./src/assets/download.jpeg"></img>
			<div className="name">Richard Stallman</div>
			<div className="devRole">G.O.A.T</div>
			<a href="https://stallman.org/" className="websiteLink">
				Richard Stallman's website
			</a>
			<address className="socials">
				<button className="socialBtns">
					<a href="mailto:dummy@dummymail.com" className="social-names">
						<i class="fas fa-envelope social-icons"></i>
					</a>
					<div className="link-name">Email</div>
				</button>
				<button className="socialBtns">
					<a href="https://stallman.org/" className="social-names">
						<img className="linkedin-icon" src="src/assets/linkedin.svg"></img>
					</a>
					<div className="link-name linkedin">LinkedIn</div>
				</button>
			</address>
		</section>
	);
}
