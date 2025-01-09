import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product(props) {
	return (
		<div className="product">
			<img src={props.data.image}  alt='' />
			<h4>{props.data.title}</h4>
			
			<div className="prices">
				<label>$99.99</label>
				<label>${props.data.price}</label>
			</div>
			<QuantityPicker />
		</div>
	)
}

export default Product;