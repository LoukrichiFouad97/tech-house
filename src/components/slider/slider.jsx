import React from "react";

import "./slider.scss";
import SliderItem from "../slider-item/slider-item";

const Slider = () => {
	return (
		<div>
			<div
				id="carouselIndicators"
				className="carousel slide slider"
				data-ride="carousel"
			>
				<ol className="carousel-indicators slider-indictors">
					<li
						data-target="#carouselIndicators"
						data-slide-to="0"
						className="active"
					></li>
					<li data-target="#carouselIndicators" data-slide-to="1"></li>
					<li data-target="#carouselIndicators" data-slide-to="2"></li>
				</ol>

				<div className="carousel-inner h-100 w-100">
					<SliderItem
						title="the AMD Ryzen Collections"
						text="Discover our selected collection of AMD of the year"
						btn="Shop all AMD Collections"
						active
						imageSrc="image-src-1"
					/>
					<SliderItem
						title="Introducing brand new HDDs & SSDs"
						text="Discover all the master pieces selected by tech-house"
						btn="Shop SSDS & HDDS"
						active={false}
						imageSrc="image-src-2"
					/>
					<SliderItem
						title="New Redeon Graphic card"
						text="Discover the brand new Redeon"
						btn="Shop Redeon GPU"
						active={false}
						imageSrc="image-src-3"
					/>
				</div>

				<a
					className="carousel-control-prev"
					href="#carouselIndicators"
					role="button"
					data-slide="prev"
				>
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Previous</span>
				</a>
				<a
					className="carousel-control-next"
					href="#carouselIndicators"
					role="button"
					data-slide="next"
				>
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"
					></span>
					<span className="sr-only">Next</span>
				</a>
			</div>
		</div>
	);
};

export default Slider;
