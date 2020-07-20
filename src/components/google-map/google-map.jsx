import React from "react";
import { GoogleMap, withScriptjs, withGoogleMap } from "react-google-maps";

const Map = () => {
	return (
		<div>
			<GoogleMap
				defaultZoom={10}
				defaultCenter={{ lat: 34.851143, lng: 4.152478 }}
			/>
		</div>
	);
};

export default withScriptjs(withGoogleMap(Map));
