import React from "react";

const ShowAlert = (text, duration, type) => {
	return <div className={`alert alert-${type}`}>{text}</div>;
};

export default ShowAlert;
