import axios from "axios";

const dummyData = [
	{
		"title": "Amethyst Teardrop",
		"category": "Teardrops",
		"price": 15.00,
		"image": "/images/amethyst-teardrop.jpg",
		"_id": "cw0001"
	},
	{
		"title": "Malachite Slice",
		"category": "Slabs & Slices",
		"price": 35.00,
		"image": "/images/malachite-slice.jpg",
		"_id": "cw0002"
	},
	{
		"title": "Flower Agate Heart",
		"category": "Hearts",
		"price": 25.00,
		"image": "/images/flower-agate-heart.jpg",
		"_id": "cw0003"
	},
	{
		"title": "Howlite Diamond",
		"category": "Diamonds",
		"price": 22.00,
		"image": "/images/howlite-diamond.jpg",
		"_id": "cw0004"
	},
	{
		"title": "Labradorite Slab",
		"category": "Slabs & Slices",
		"price": 40.00,
		"image": "/images/lab-slab.jpg",
		"_id": "cw0005"
	},
	{
		"title": "Labradorite Freeform",
		"category": "Freeforms",
		"price": 45.00,
		"image": "/images/sunset-lab-freeform.jpg",
		"_id": "cw0006"
	},
	{
		"title": "Golden Healer Flame",
		"category": "Carvings",
		"price": 28.00,
		"image": "/images/golden-healer-flame.jpg",
		"_id": "cw0007"
	},
	{
		"title": "Labradorite Freeform",
		"category": "Freeforms",
		"price": 45.00,
		"image": "/images/sm-lab-freeform.jpg",
		"_id": "cw0008"
	},
	{
		"title": "Ruby In Fuchsite",
		"category": "Diamonds",
		"price": 22.00,
		"image": "/public/images/ruby-in-fuchsite.jpg",
		"_id": "cw0009"
	},
	{
		"title": "Opalite Crescent Moon",
		"category": "Moons",
		"price": 12.00,
		"image": "/public/images/opalite-moon.jpg",
		"_id": "cw0010"
	}
]

const dummyCollections = ["Teardrops", "Slabs & Slices", "Hearts", "Diamonds", "Freeforms", "Carvings", "Moons"];

class DataService {
	
	async getProducts() {
		//TODO: call the server to get the products
		let response = await axios.get("http://127.0.0.1:5000/api/products");
		return response.data;
		
		// return dummyData;
	}

	async getCategories() {
		let response = await axios.get("http://127.0.0.1:5000/api/categories");
		return response.data;
		//return dummyCollections;
	}

	async saveProduct(product) {
		let response = await axios.post("http://127.0.0.1:5000/api/products", product);
		return response.data;
	}

}

export default new DataService();