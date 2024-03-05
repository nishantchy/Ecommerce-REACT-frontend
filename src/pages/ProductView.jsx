import React, { useEffect, useState } from 'react'
import "../styles/productview.css"
import { Link, useParams } from 'react-router-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import { faMinus } from '@fortawesome/free-solid-svg-icons'
import { ToastContainer } from 'react-toastify'
import { toast } from 'react-toastify'
import ProductList from '../components/ProductList'

const ProductView = () => {
    const[product, setProduct] = useState({})
    const params = useParams()
    const id = params.productId 

    const getProductList = async () => {
        const url = `http://127.0.0.1:8000/api/product/${id}`;
        const response = await fetch(url);
        try{
            const responseJson = await response.json();
            console.log(responseJson);
            setProduct(responseJson.message);
        }catch(err){
            console.log(err);
        }
    };
    useEffect(()=>{
        getProductList()
    },[])
    const addToCart = () => {
        const cartItem = JSON.parse(localStorage.getItem('cartItems')) || [];
        const productItem = {
            id: product.id,
            title: product.name,
            price: product.sale_price,
            category: product.category,
            image: product.image,
            quantity: 1
        };
        const isExisting = cartItem.some(item => item.id === productItem.id);
        if (isExisting) {
            toast.error('Product is already in the cart');
        } else {
            cartItem.push(productItem);
            localStorage.setItem('cartItems', JSON.stringify(cartItem));
            toast.success(`${productItem.title} is added to cart`);
        }
    };
        return (
            <>
            <ToastContainer theme='colored' position='top-center'/>
            <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row">
                        {console.log(product.name)}
                        <div className="col-md-5 mt-3">
                            <div className="bg-white border">
                                <img src={`http://127.0.0.1:8000/storage/${product.image}`} alt={product.name} />
                            </div>
                        </div>
                        <div className="col-md-7 mt-3">
                            <div className="product-view">
                                <h4 className="product-name">
                                    {product.name}
                                    <label className={`label-stock bg-${product.stocks > 0 ? 'success' : 'danger'}`}>{product.stocks > 0 ? 'In Stock' : 'Out of Stock'}</label>
                                </h4>
                                <hr />
                                <p className="product-path">
                                    Home / Category / Product / {product.name} 
                                </p>
                                <div>
                                   
                                    <span className="selling-price">Rs.{product.sale_price}</span>
                                    <span className="original-price">Rs.{product.list_price}</span>
                                </div>
                                <div className="mt-2">
                                    <div className="input-group">
                                        <span className="btn btn1"><FontAwesomeIcon icon={faPlus}></FontAwesomeIcon></span>
                                        <input type="text" value="1" className="input-quantity" />
                                        <span className="btn btn1"><FontAwesomeIcon icon={faMinus}></FontAwesomeIcon></span>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <Link to="" className="btn btn1" onClick={addToCart}> <FontAwesomeIcon icon={faCartShopping}/> Add To Cart</Link>
                                </div>
                                <div className="mt-3">
                                    <h5 className="mb-0">Small Description</h5>
                                
                                    <p>{product.details}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-md-12 mt-3">
                            <div className="card">
                                <div className="card-header bg-white">
                                    <h4>Description</h4>
                                </div>
                                <div className="card-body">
                                    <p>
                                        {product.details}
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <ProductList/> */}
               </>
        );
     
}

export default ProductView
