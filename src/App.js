import React from 'react';

import Homepage from './pages/Home/Home'
import ShippingOfferBar from './components/Shipping-offer-bar/Shipping-offer-bar'

import './App.css';

function App() {
  return (
		<div className="App">
			<ShippingOfferBar />
			<Homepage />
		</div>
	);
}

export default App;
