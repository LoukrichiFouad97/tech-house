import React from "react";
import { auth } from "../../database/firebase";

import { Link } from "react-router-dom";

import "./navbar.scss";

class Navbar extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			user: null,
		};
	}

	componentDidMount() {
		this.authListener();
	}

	authListener = () => {
		auth.onAuthStateChanged((user) => {
			if (user) {
				this.setState({ user });
			}
		});
	};

	logout = () => {
		auth.signOut();
		this.setState({ user: null });
	};

	render() {
		return (
			<div className="bg-primary p-2 text-white main-navbar sticky-top">
				<div className="container">
					<nav className="navbar navbar-expand-md navbar-dark px-0 col col-sm-8">
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

					<div className="nav-icons ml-3 col col-sm-4">
						{this.state.user ? (
							<button
								className="btn btn-outline-light px-4"
								onClick={this.logout}
							>
								Sign-Out
							</button>
						) : (
							<Link className="btn btn-outline-light px-4" to="/signin">
								Singin
							</Link>
						)}
						<i className="fas fa-shopping-cart ml-2"></i>
					</div>
				</div>
			</div>
		);
	}
}

export default Navbar;
