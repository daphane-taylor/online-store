import { useContext } from 'react';
import { Link } from 'react-router-dom';
import GlobalContext from '../state/globalContext';
import './styles/navbar.css'

function Navbar() {

    const user = useContext(GlobalContext).user;
    const cart = useContext(GlobalContext).cart;

    return (
        <nav className="navbar navbar-expand-lg" data-bs-theme="light">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/">CrystalWiki</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link active" aria-current="page" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/catalog">Shop Crystals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/about">About</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/admin">Admin</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/contact">Contact</Link>
                        </li>
                    </ul>
                    <div className="d-flex" role="search">
                        <button className="btn btn-sm btn-user">{user.name}</button>
                        <Link className="btn btn-sm btn-cart" to="/cart">Cart<span>({cart.length})</span></Link>
                    </div>
                </div>
            </div>
        </nav>
    )
}

export default Navbar;