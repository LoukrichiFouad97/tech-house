import React from "react";

import CollectionOverview from "../collection-overview/collection-overview";

import "./collections.scss";

const Collections = () => {
	return (
		<div className="Collections m-3">
			<div className="container">
				<div className="row">
					<div className="left-collection col-md-6">
						<CollectionOverview
							title="Hard Drives (HDD)"
							text="see all adata ssd collection"
							imageSrc="image-src-1"
						/>
					</div>
					<div className="right-collection col-md-6">
						<CollectionOverview
							title="Solid State Drives (SSD)"
							text="see all adata ssd collection"
							imageSrc="image-src-2"
						/>
						<CollectionOverview
							title="Memories (RAMs)"
							text="see all adata ssd collection"
							imageSrc="image-src-3"
						/>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Collections;
