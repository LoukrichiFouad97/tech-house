import React from "react";

import Signin from "../../components/signin/signin";
import Signup from "../../components/signup/signup";

import "./signin-and-signup.scss";

const SigninAndSignup = () => (
	<div className="container d-flex SigninAndSignup py-5 my-5 ">
		<Signin />
		<Signup />
	</div>
);

export default SigninAndSignup;
