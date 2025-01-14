import { useContext } from 'react';
import GlobalContext from '../state/globalContext';
import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props) {

	const globalAdd = useContext(GlobalContext).addProductToCart;

	function onAdd() {
		console.log("Product added to cart");
		globalAdd(props.data);
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
				<QuantityPicker />
				<button className="btn btn-sm btn-outline-light" onClick={onAdd}>Add</button>
			</div>
		</div>
	)
}

export default Product;