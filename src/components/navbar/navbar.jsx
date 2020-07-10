import React from "react";

import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="bg-primary p-2 text-white main-navbar sticky-top">
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-md navbar-dark px-0 col">
						<a className="navbar-brand font-weight-bold" href="#">
							TECH<span className="text-secondary ">HOUSE</span>
						</a>

						<button
							className="navbar-toggler"
							type="button"
							data-toggle="collapse"
							data-target="#navbarNav"
							aria-controls="navbarNav"
							aria-expanded="false"
							aria-label="Toggle navigation"
						>
							<span className="navbar-toggler-icon"></span>
						</button>

						<div className="collapse navbar-collapse" id="navbarNav">
							<ul className="navbar-nav">
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										Home <span className="sr-only">(current)</span>
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										Shop
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										Contact
									</a>
								</li>
								<li className="nav-item">
									<a className="nav-link text-white" href="#">
										Our Story
									</a>
								</li>
							</ul>
						</div>
					</nav>

					<div className="nav-icons">
						<i className="fas fa-user mr-2"></i>
						<i className="fas fa-shopping-cart"></i>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Navbar;
