import React, { Component } from "react";

import { auth, signInWithGoogle } from "../../database/firebase";

import "./signin.scss";

class Signin extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	handleSubmit = (e) => {
		e.preventDefault();
		const { email, password } = this.state;
		auth
			.signInWithEmailAndPassword(email, password)
			// .then((data) => console.log(data))
			.catch((err) => {
				console.log(err);
			});
	};

	render() {
		const { email, password } = this.state;
		return (
			<div className="Signin">
				<h2 className="title text-capitalize">Sign-in with your account</h2>

				<form>
					<div className="form-group">
						<label htmlFor="email">Email address</label>
						<input
							type="email"
							s
							name="email"
							value={email}
							className="form-control"
							id="email"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={this.handleChange}
							required
						/>
					</div>
					<div className="form-group">
						<label htmlFor="password">Password</label>
						<input
							type="password"
							name="password"
							value={password}
							className="form-control"
							id="password"
							placeholder="Password"
							onChange={this.handleChange}
							required
						/>
					</div>
					<button
						type="submit"
						className="btn btn-primary mr-2"
						onClick={this.handleSubmit}
					>
						Sign-in
					</button>
					Or
					<button
						type="submit"
						className="btn btn-secondary ml-2"
						onClick={signInWithGoogle}
					>
						Sign-in with <i className="fab fa-google"></i>
					</button>
				</form>
			</div>
		);
	}
}

export default Signin;
