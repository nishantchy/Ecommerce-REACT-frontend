import React from 'react'
import { Link } from 'react-router-dom'
import "../styles/cart.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { faTrash } from '@fortawesome/free-solid-svg-icons'

const Cart = () => {
        const cartItems = JSON.parse(localStorage.getItem('cartItems')) || [];
  return (
    <>
         <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row cart">
                        <div className="col-md-12">
                            <div className="shopping-cart">
                                <div className="cart-header d-none d-sm-none d-mb-block d-lg-block">
                                    <div className="row">
                                        <div className="col-md-6">
                                            <h4>Products</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Price</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Quantity</h4>
                                        </div>
                                        <div className="col-md-2">
                                            <h4>Remove</h4>
                                        </div>
                                    </div>
                                </div>
                                {cartItems.map(item => (
                                    <div className="cart-item" key={item.id}>
                                        <div className="row">
                                            <div className="col-md-6 my-auto">
                                                <Link to={`/product/${item.id}`}>
                                                    <label className="product-name">
                                                    <img src={`http://127.0.0.1:8000/storage/${item.image}`} alt={item.title} />
                                                        {item.title}
                                                    </label>
                                                </Link>
                                            </div>
                                            <div className="col-md-2 my-auto">
                                                <label className="price">Rs.{item.price}</label>
                                            </div>
                                            <div className="col-md-2 col-7 my-auto">
                                                <div className="quantity">
                                                    <div className="input-group">
                                                        <span className="btn btn1"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>
                                                        <input type="text" value={item.quantity} className="input-quantity" readOnly />
                                                        <span className="btn btn1"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="col-md-2 col-5 my-auto">
                                                <div className="remove">
                                                    <button className="btn btn-danger btn-sm">
                                                    <FontAwesomeIcon icon={faTrash}></FontAwesomeIcon> Remove 
                                                    </button>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    </>
  )
}

export default Cart
