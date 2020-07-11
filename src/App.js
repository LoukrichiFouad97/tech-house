import React from "react";

import Homepage from "./pages/Home/Home";
import ShippingOfferBar from "./components/Shipping-offer-bar/Shipping-offer-bar";
import Navbar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";

import "./App.css";

function App() {
	return (
		<div className="App">
			<ShippingOfferBar />
			<Navbar />
			<Homepage />
			<Footer />
		</div>
	);
}

export default App;
