import './styles/catalog.css';
import Product from '../components/product';
import { useEffect, useState } from 'react';
import dataService from '../services/dataService';



function Catalog() {
	const [allProducts, setAllProducts] = useState([]);
	const [collections, setCollections] = useState([]);
	const [selectedCategory, setSelectedCategory] = useState("");

	async function loadData() {
		const prods = await dataService.getProducts();
		setAllProducts(prods);

		const collection = await dataService.getCategories();
		setCollections(collection);
	}

	function handleCategory(collection) {
		console.log("collection clicked", collection);
		setSelectedCategory(collection);
	}

	useEffect(function() {
		loadData();
	}, []);

	function clearFilter() {
		setSelectedCategory("");
	}

	return (
		<div className="catalog page">
			<h2 className="flex-container">Crystal & Mineral Catalog</h2>

		<div className="filter">
		<button onClick={clearFilter} className="btn categories">All</button>		
		{ collections.map( collection => <button onClick={() => {handleCategory(collection)} }className="btn categories">{collection}</button>) }
		 </div>

		{ allProducts.filter(prod => prod.category == selectedCategory || !selectedCategory).map( prod => <Product data={prod} />) }

		</div>
	)
}

export default Catalog;			