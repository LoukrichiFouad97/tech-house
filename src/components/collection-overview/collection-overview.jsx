import React from "react";

import "./collection-overview.scss";

const CollectionOverview = ({ title, text, imageSrc }) => {
	return (
		<div className={`collection-overview my-3 ${imageSrc}`}>
			<h4>{title} </h4>
			<p>{text}</p>
			<button className="btn btn-secondary">Shop Now</button>
		</div>
	);
};

export default CollectionOverview;
