import React from 'react'
import { Link } from 'react-router-dom'
import '../styles/navbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useAuth } from '../AuthContext';

const Navbar = () => {
    const {user, logout} = useAuth();
  return (
    <>
<div className="main-navbar shadow-sm sticky-top">
        <div className="top-navbar">
            <div className="container-fluid">
                <div className="row">
                    <div className="col-md-2 my-auto d-none d-sm-none d-md-block d-lg-block">
                        <Link to='/'><h5 className="brand-name">Hamro Electronics</h5></Link>
                    </div>
                    <div className="col-md-5 my-auto">
                        <form role="search">
                            <div className="input-group">
                                <input type="search" placeholder="Search your product" className="form-control" />
                                <button className="btn bg-white" type="submit">
                                <FontAwesomeIcon icon={faSearch} />
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-md-5 my-auto">
                        <ul className="nav justify-content-end">
                            
                            <li className="nav-item">
                                <Link className="nav-link" to="/cart">
                                <FontAwesomeIcon icon={faCartShopping} /> Cart (0)
                                </Link>
                            </li>
                            {user ? (
                                <>
                                <li className="nav-item">
                                    <span className="nav-link">{user.name}</span>
                                </li>
                                <li className="nav-item">
                                    <button className="btn btn-link nav-link" onClick={logout}>Logout</button>
                                </li>
                                </>
                            ) : (
                                <li className="nav-item">
                                <Link className="nav-link" to="/login">Login/SignUp</Link>
                                </li>
                            )}     
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        <nav className="navbar navbar-expand-lg">
            <div className="container">
                <Link className="navbar-brand d-block d-sm-block d-md-none d-lg-none" to="#">
                    FundLinkEcom
                </Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse " id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link className="nav-link" to="/">Home</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">All Categories</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">New Arrivals</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Featured Products</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Electronics</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Fashions</Link>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="#">Accessories</Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    </div>

    </>
  )
}

export default Navbar
