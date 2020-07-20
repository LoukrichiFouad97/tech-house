import React, { Component } from "react";

import { auth } from "../../database/firebase";

import "./signup.scss";

class Signup extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: "",
			password: "",
			confirmPassword: "",
		};
	}

	handleChange = (e) => {
		const { name, value } = e.target;
		this.setState({ [name]: value });
		console.log(this.state);
	};

	handleSubmit = async (e) => {
		e.preventDefault();
		const { email, password, confirmPassword } = this.state;

		// check if password match
		if (password !== confirmPassword) {
			alert("Passwords doesn't match");
			return;
		}

		// creates a user profile
		try {
			await auth.createUserWithEmailAndPassword(email, password);
			console.log(auth.currentUser.email);
		} catch (err) {
			console.log(err.message);
		}
	};

	render() {
		const { email, password, confirmPassword } = this.state;
		return (
			<div className="Signup">
				<h2 className="title text-capitalize">Create a new acount</h2>
				<form>
					<div className="form-group">
						<label htmlFor="exampleInputEmail1">Email address</label>
						<input
							type="email"
							name="email"
							value={email}
							className="form-control"
							id="exampleInputEmail1"
							aria-describedby="emailHelp"
							placeholder="Enter email"
							onChange={this.handleChange}
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
						/>
					</div>
					<div className="form-group">
						<label htmlFor="confirmPassword">Confirm Password</label>
						<input
							type="password"
							name="confirmPassword"
							value={confirmPassword}
							className="form-control"
							id="confirmPassword"
							placeholder="Confirm Password"
							onChange={this.handleChange}
						/>
					</div>

					<button
						type="submit"
						className="btn btn-primary"
						onClick={this.handleSubmit}
					>
						Sign-up
					</button>
				</form>
			</div>
		);
	}
}

export default Signup;
