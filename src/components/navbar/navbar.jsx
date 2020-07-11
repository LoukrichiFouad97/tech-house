import React from "react";

import { Link } from "react-router-dom";

import "./navbar.scss";

const Navbar = () => {
	return (
		<div className="bg-primary p-2 text-white main-navbar sticky-top">
			<div className="container">
				<div className="row">
					<nav className="navbar navbar-expand-md navbar-dark px-0 col">
						<Link className="navbar-brand font-weight-bold" to="/">
							TECH<span className="text-secondary ">HOUSE</span>
						</Link>

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
									<Link to="/" className="nav-link text-white">
										Home
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/shop" className="nav-link text-white">
										Shop
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/contact" className="nav-link text-white">
										Contact
									</Link>
								</li>

								<li className="nav-item">
									<Link to="/about" className="nav-link text-white">
										About
									</Link>
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
