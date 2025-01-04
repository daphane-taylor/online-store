import './styles/catalog.css';
import Product from '../components/product';

function Catalog() {
	return (
		<div className="catalog">
			<h1>Check out our amazing catalog!</h1>

			<Product />
			<Product />
			<Product />
			<Product />
			<Product />
		</div>
	)
}

export default Catalog;