import React, { Component } from "react";

export default class ContactInfo extends Component {
	render() {
		return (
			<div className="ContactInfo container row m-auto ">
				<div className="col d-flex flex-column justify-content-center w-75">
					<h2 className='mb-3'>Contact Info</h2>
					<ul className="list-group">
						<li class="list-group-item">
							<span className="font-weight-bold d-block">Address:</span>{" "}
							<span>123 Street, state, Country</span>{" "}
						</li>
						<li class="list-group-item">
							<span className="font-weight-bold d-block">Phone:</span>{" "}
							<span>(123) 555 5555</span>
						</li>
						<li class="list-group-item">
							<span className="font-weight-bold d-block">Email:</span>{" "}
							<span>example@email.com</span>{" "}
						</li>
					</ul>
				</div>
				<div className="col my-5">
					<form className="w-75">
						<div className="form-group">
							<label htmlFor="email">Email address</label>
							<input
								type="email"
								s
								name="email"
								className="form-control"
								id="email"
								aria-describedby="emailHelp"
								placeholder="Enter email"
								required
							/>
						</div>
						<div className="form-group">
							<label htmlFor="message">message</label>
							<textarea
								type="message"
								name="message"
								rows="6"
								className="form-control"
								id="message"
								placeholder="Message..."
							/>
						</div>
						<button type="submit" className="btn btn-primary mr-2 px-4">
							Send
						</button>
					</form>
				</div>
			</div>
		);
	}
}
