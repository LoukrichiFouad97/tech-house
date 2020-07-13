import React from "react";
import { Switch, Route } from "react-router-dom";

import Homepage from "./pages/Home/Home";
import Contact from "./pages/Contact/contact";
import About from "./pages/about/about";
import Shop from "./pages/shop/shop";
import SigninAndSignup from './pages/signIn-and-signup/signin-and-signup'

import ShippingOfferBar from "./components/Shipping-offer-bar/Shipping-offer-bar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
	return (
		<div className="App">
			<ShippingOfferBar />
			<Navbar />
			<Switch>
				<Route exact path="/" component={Homepage} />
				<Route path="/shop" component={Shop} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/about" component={About} />
				<Route exact path="/signin" component={SigninAndSignup} />
			</Switch>
			<Footer />
		</div>
	);
}

export default App;
