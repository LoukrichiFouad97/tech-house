import React from "react";

import "./slider-item.scss";

const SliderItem = ({ title, text, btn, active, imageSrc }) => (
	<div className={`carousel-item slider-item ${active && "active"}`}>
		<div className={`item-img ${imageSrc}`}></div>
		<div className="item-content text-capitalize text-center text-white">
			<h4 className="display-4 ">{title}</h4>
			<p>{text}</p>
			<button className="btn btn-primary m-auto px-3 py-2">{btn}</button>
		</div>
	</div>
);

export default SliderItem;
