import { useContext, useState } from 'react';
import GlobalContext from '../state/globalContext';
import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props) {
	const [quantity, setQuantity] = useState(1);
	const globalAdd = useContext(GlobalContext).addProductToCart;

	function onAdd() {
		let fixedProduct = {...props.data};
		fixedProduct.quantity = quantity;
		globalAdd(fixedProduct);
	}

	function handleQuantity(qty) {
		setQuantity(qty);
	}

	return (
		<div className="product">
			<img src={props.data.image}  alt='' />
			<h4>{props.data.title}</h4>
			
			<div className="parent">
				<label>$99.99</label>
				<label>${props.data.price.toFixed(2)}</label>
			</div>

			<div className="parent">
				<QuantityPicker  onChange={handleQuantity} />
				<button className="btn btn-sm btn-outline-light" onClick={onAdd}>Add</button>
			</div>
		</div>
	)
}

export default Product;