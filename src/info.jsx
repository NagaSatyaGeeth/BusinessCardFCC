import React from "react";
import "./info.css";

export default function info() {
	return (
		<section className="information">
			<div className="info-box">
				<div className="info-title">About</div>
				<div className="info-desc">
					He campaigns for software to be distributed in such a manner that its
					users have the freedom to use, study, distribute, and modify that
					software.
				</div>
			</div>
			<div className="info-box">
				<div className="info-title">Interests</div>
				<div className="info-desc">
					FOSS, GNU, Software Development and programming.
				</div>
			</div>
		</section>
	);
}
