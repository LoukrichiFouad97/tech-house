import React, { Component } from "react";

import Map from "../../components/google-map/google-map";
import ContactInfo from "../../components/contact/contact";

import "./contact.scss";

export default class Contact extends Component {
	render() {
		return (
			<div className="Contact">
				<ContactInfo />
				<Map
					googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=
						AIzaSyBijlqURs36678wxILx_2RP6ZUGBzjaWn4
					`}
					loadingElement={<div style={{ height: `100%` }} />}
					containerElement={<div style={{ height: `400px` }} />}
					mapElement={<div style={{ height: `100%` }} />}
				/>
			</div>
		);
	}
}
