import React, { Component } from "react";

import "./about.scss";
import logo from "../../assets/illustration_workers/1x/Asset 5.png";

export default class About extends Component {
	render() {
		return (
			<div className="container About my-3">
				<div className="row">
					<div className="col  d-flex flex-column justify-content-center align-items-start">
						<h2 className="display-4">About Us</h2>
						<p className="mb-4 mt-2 w-75">
							Lorem ipsum, dolor sit amet consectetur adipisicing elit.
							Perferendis, illo velit necessitatibus, consequuntur veniam,
							placeat porro maiores pariatur itaque in rerum corrupti corporis.
						</p>
						<button className="btn btn-secondary font-weight-bold px-4 py-2">
							Email Us
						</button>
					</div>
					<div className="col">
						<img className="w-100" src={logo} />
					</div>
				</div>
			</div>
		);
	}
}
