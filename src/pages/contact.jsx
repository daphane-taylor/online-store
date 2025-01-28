import './styles/contact.css'

function Contact(){
	return (
		<div className="contact page">
			<h1 className="flex-container">Contact Page</h1>
			<div className="container">
				<div>
                    <label className="form-label">Your Name:</label>
                    <input type="text" className="form-control" name="name" />
                </div>
				<div>
                    <label className="form-label">Your Email:</label>
                    <input type="email" className="form-control" name="email" />
                </div>
				<div>
                    <label className="form-label">Subject:</label>
                    <input type="text" className="form-control" name="subject" />
                </div>

				<div>
                    <label className="form-label">Message or Request:</label>
					<textarea className="form-control" name="message"></textarea>                
				</div>

				<div className="controls">
					<button className="btn btn-sm btn-outline-dark">Send</button>
				</div>
			</div>
			</div>
	)
}

export default Contact;