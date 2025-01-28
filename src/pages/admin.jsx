import './styles/admin.css';
import { useState } from 'react';

function Admin() {
    const [allCoupons, setAllCoupons] = useState([]);
    const [allProducts, setAllProducts] = useState([]);
    const [coupon, setCoupon] = useState({ code: "", discount: "" });
    const [product, setProduct] = useState({ title: "", price: "", image: "", category: "" });


    function handleCoupon(e) {
        const text = e.target.value;
        const name = e.target.name;

        /*
            To modify state var that hold Object or Array:
            - create a copy
            - modify the copy
            - set the copy back
         */

            let copy = {...coupon};
            if (name =="code") {
                copy.code = text;
            } else if (name =="discount"){
                copy.discount = text;
            }
            setCoupon(copy);
    }

    function saveCoupon() {
        console.log(coupon);

        let copy = [...allCoupons];
        copy.push(coupon);
        setAllCoupons(copy);
    }

    function handleProduct(e) {
        const text= e.target.value;
        const name = e.target.name; 
        
        let copy = {...product};
        if (name == "title") {
            copy.title = text;
        } else if (name == "price"){
            copy.price = text;
        } else if (name == "image"){
            copy.image = text;
        } else if (name == "category"){
            copy.category = text;
        }
        setProduct(copy);
    }

    function saveProduct() {
        console.log(product);
        let copy = [...allProducts];
        copy.push(product);
        setAllProducts(copy);
    }

	return (
		<div className="admin page">
			<h1 className="flex-container">Store Administration</h1>
			<div className="admin-container">
				<div className="products-section">
					<h3>Register Product</h3>

					<div>
                        <label className="form-label">Product Name:</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="title" />
                    </div>

					<div>
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-control" onBlur={handleProduct} name="price" />
                    </div>

					<div>
                        <label className="form-label">Category:</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="category" />
                    </div>

					<div>
                        <label className="form-label">Images:</label>
                        <input type="text" className="form-control" onBlur={handleProduct} name="image" />
                    </div>

					<div className="controls">
						<button className="btn btn-sm btn-outline-light" onClick={saveProduct}>Save Product</button>
					</div>

                    <ul>
                        {allProducts.map( product  => <li>{product.title} - ${product.price} </li>)}
                    </ul>

				</div>

				<div className="discounts-section">
					<h3>Create Discount</h3>

					<div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" onBlur={handleCoupon} name="code" />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input type="number" className="form-control" onBlur={handleCoupon} name="discount" />
                    </div>

                    <div className="controls">
                        <button className="btn btn-sm btn-outline-light" onClick={saveCoupon}>Save Discount</button>
                    </div>

                    <ul className="dis-code-list">
                        {allCoupons.map( cp  => <li>{cp.code} - {cp.discount} % </li>)}
                    </ul>

				</div>
			</div>
		</div>
	);
}

export default Admin;