import React from "react";

import "./signup.scss";

const Signup = () => (
	<div className="Signup">
		<h2 className="title text-capitalize">Create a new acount</h2>
		<form>
			<div className="form-group">
				<label htmlFor="exampleInputEmail1">Email address</label>
				<input
					type="email"
					className="form-control"
					id="exampleInputEmail1"
					aria-describedby="emailHelp"
					placeholder="Enter email"
				/>
				<small id="emailHelp" className="form-text text-muted">
					We'll never share your email with anyone else.
				</small>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Password"
				/>
			</div>
			<div className="form-group">
				<label htmlFor="exampleInputPassword1">Confirm Password</label>
				<input
					type="password"
					className="form-control"
					id="exampleInputPassword1"
					placeholder="Confirm Password"
				/>
			</div>

			<button type="submit" className="btn btn-primary">
				Submit
			</button>
		</form>
	</div>
);

export default Signup;
