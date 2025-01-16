import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import './styles/cart.css';

function Cart() {

	const cart = useContext(GlobalContext).cart;
	return (
		<div className="cart page">
			<h1>Cart</h1>
			<p>Welcome to your cart. Are you ready to complete your purchase?</p>
			<h3>We have {cart.length} products waiting on you!</h3>

			<div className="list">
				<ul>
					{cart.map( prod  => 
						<li className="cart-prod">
							<img src={prod.image} alt=""></img>
							<h6>{prod.title}</h6>
							<label>Quantity: {prod.quantity}</label> 				
							<label>Price: {prod.price.toFixed(2)}</label>
							<label>Total: {prod.price * prod.quantity.toFixed(2)}</label>
							<button className="btn btn-outline-danger">Remove</button>
						</li>
					)}					
				</ul>
			</div>
		</div>
	)
}

export default Cart;