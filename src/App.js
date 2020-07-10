import React from 'react';

import Homepage from './pages/Home/Home'
import ShippingOfferBar from './components/Shipping-offer-bar/Shipping-offer-bar'
import Navbar from './components/navbar/navbar'
import './App.css';

function App() {
  return (
		<div className="App">
			<ShippingOfferBar />
			<Navbar />
			<Homepage />
		</div>
	);
}

export default App;
