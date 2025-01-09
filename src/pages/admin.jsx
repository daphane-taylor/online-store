import './styles/admin.css';

function Admin() {
	return (
		<div className="admin page">
			<h1>Store Administration</h1>

			<div className="admin-container">
				<div className="products-section">
					<h3>Register Product</h3>

					<div>
                        <label className="form-label">Product Name:</label>
                        <input type="text" className="form-control" />
                    </div>

					<div>
                        <label className="form-label">Price:</label>
                        <input type="number" className="form-control" />
                    </div>

					<div>
                        <label className="form-label">Category:</label>
                        <input type="text" className="form-control" />
                    </div>

					<div>
                        <label className="form-label">Images:</label>
                        <input type="text" className="form-control" />
                    </div>

					<div className="controls">
						<button className="btn btn-sm btn-outline-light">Save Product</button>
					</div>
				</div>

				<div className="discounts-section">
					<h3>Create Discount</h3>

					<div>
                        <label className="form-label">Code:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div>
                        <label className="form-label">Discount:</label>
                        <input type="text" className="form-control" />
                    </div>

                    <div className="controls">
                        <button className="btn btn-sm btn-outline-light">Save Discount</button>
                    </div>
				</div>
			</div>
		</div>
	);
}

export default Admin;