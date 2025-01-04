import QuantityPicker from './quantityPicker';
import './styles/product.css';

function Product() {
	return (
		<div className="product">
			<img src="https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=600"  alt="camera" />
			<h3>Product Component</h3>

			<label>$99.99</label>
			<label>$99.99</label>

			<QuantityPicker />
		</div>
	)
}

export default Product;