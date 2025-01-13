import './styles/catalog.css';
import Product from '../components/product';
import { useState } from 'react';

const dummyData = [
	{
		"title": "Amethyst Teardrop",
		"category": "Teardrops",
		"price": 15.00,
		"image": "/images/amethyst-teardrop.jpg",
		"hoverImage": "/images/amethyst-teardrop2.jpg",
		"_id": "cw0001"
	},
	{
		"title": "Malachite Slice",
		"category": "Slabs & Slices",
		"price": 35.00,
		"image": "/images/malachite-slice.jpg",
		"hoverImage": "/images/malachite-slice2.jpg",
		"_id": "cw0002"
	},
	{
		"title": "Flower Agate Heart",
		"category": "Hearts",
		"price": 25.00,
		"image": "/images/flower-agate-heart.jpg",
		"hoverImage": "/images/flower-agate-heart2.jpg", 
		"_id": "cw0003"
	},
	{
		"title": "Howlite Diamond",
		"category": "Diamonds",
		"price": 22.00,
		"image": "/images/howlite-diamond.jpg",
		"hoverImage": "/images/howlite-diamond2.jpg",
		"_id": "cw0004"
	},
	{
		"title": "Labradorite Slab",
		"category": "Slabs & Slices",
		"price": 40.00,
		"image": "/images/lab-slab.jpg",
		"hoverImage": "/images/lab-slab2.jpg",
		"_id": "cw0005"
	},
	{
		"title": "Labradorite Freeform",
		"category": "Freeforms",
		"price": 45.00,
		"image": "/images/sunset-lab-freeform.jpg",
		"hoverImage": "/images/sunset-lab-freeform2.jpg",
		"_id": "cw0006"
	},
	{
		"title": "Golden Healer Flame",
		"category": "Carvings",
		"price": 28.00,
		"image": "/images/golden-healer-flame.jpg",
		"hoverImage": "/images/golden-healer-flame2.jpg",
		"_id": "cw0007"
	},
	{
		"title": "Labradorite Freeform",
		"category": "Freeforms",
		"price": 45.00,
		"image": "/images/sm-lab-freeform.jpg",
		"hoverImage": "/images/sm-lab-freeform2.jpg",
		"_id": "cw0008"
	}
]

const dummyCollections = ["Teardrops", "Slabs & Slices", "Hearts", "Diamonds", "Freeforms", "Carvings"];

function Catalog() {
	const [allProducts, setAllProducts] = useState(dummyData);
	const [collections, setCollections] = useState(dummyCollections);

	return (
		<div className="catalog page">
			<h2>Crystal & Mineral Catalog</h2>

		<div className="filter">		
		{ collections.map( collection => <button className="btn btn-secondary">{collection}</button>) }
		 </div>

		{ allProducts.map( prod => <Product data={prod} />) }

		</div>
	)
}

export default Catalog;			