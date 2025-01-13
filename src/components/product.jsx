import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props) {
	function onAdd() {
		console.log("Product added to cart");
	}

	return (
		<div className="product">
			<img src={props.data.image}  alt='' />
			<h4>{props.data.title}</h4>
			
			<div className="parent">
				<label>$99.99</label>
				<label>${props.data.price}</label>
			</div>

			<div className="parent">
				<QuantityPicker />
				<button className="btn btn-sm btn-outline-light" onClick={onAdd}>Add</button>
			</div>
		</div>
	)
}

export default Product;