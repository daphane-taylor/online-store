import { useState } from 'react';
import './styles/quantityPicker.css';

function QuantityPicker() {
	const [quantity, setQuantity] = useState(1);

	function increase() {
		let value = quantity + 1;
		setQuantity(value);
		//NOTE: the setter is not immmediate, it will take some time (milliseconds)
	}

	function decrease() {
		if(quantity == 1) return;

		let value = quantity - 1;
		setQuantity(value);
	}

	return (
		<div className="qt-picker">
			<button className="btn btn-sm btn-outline-dark" disabled={quantity == 1} onClick={decrease}>-</button>
			<label>{quantity}</label>
			<button className="btn btn-sm btn-outline-dark" onClick={increase}>+</button>
		</div>
	)
}

export default QuantityPicker;