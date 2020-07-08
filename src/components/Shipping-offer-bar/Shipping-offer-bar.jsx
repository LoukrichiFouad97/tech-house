import React from "react";

import "./Shipping-offer-bar.scss";

const ShippingOfferBar = () => {
	return (
		<div className="ShippingOfferBar bg-primary text-white py-2 border-bottom  font-weight-bold">
			<div className="container">
				<div className="row d-flex align-items-center">
					<p className="col mb-0">Free shipping on orders over $80</p>
					<button className="btn btn-secondary font-weight-bold">
						<i className="fa fa-envelope mr-2"></i>
						Subscribe &amp; Save
					</button>
				</div>
			</div>
		</div>
	);
};

export default ShippingOfferBar;
