import React, { Component } from "react";

import Slider from "../../components/slider/slider";
import Collections from "../../components/collections/collections";

import "./Home.scss";

export default class Home extends Component {
	render() {
		return (
			<div className="home">
				<Slider />
				<Collections />
			</div>
		);
	}
}
