import { Link } from 'react-router-dom';
import React, { useEffect, useState } from 'react'
import '../styles/productlist.css'

const ProductList = () => {
    const[limit, setLimit] = useState(8)
    const[products, setProducts] = useState([]);
    const getProductList = async () => {
        const url = "http://127.0.0.1:8000/api/product";
        const response = await fetch(url);
        try{
            const responseJson = await response.json();
            console.log(responseJson);
            setProducts(responseJson.message);
        }catch(err){
            console.log(err);
        }
    };
    useEffect(()=>{
        getProductList()
    },[])

    const loadMore = () => {
        setLimit(prevLimit => prevLimit + 4);
    };

    const loadLess = () => {
        setLimit(8);
    };
        
    return (
        <>
            <div className="py-3 py-md-5 bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <h4 className="mb-4">Our Products</h4>
                        </div>
                        {products && products.slice(0,limit).map(product => (
                            <div className="col-md-3" key={product.id}>
                                <div className="product-card">
                                    <div className="product-card-img">
                                        {product.stocks > 0 ? (
                                            <label className="stock bg-success">In Stock</label>
                                        ) : (
                                            <label className="stock bg-danger">Out of Stock</label>
                                        )}
                                        <img src={`http://127.0.0.1:8000/storage/${product.image}`} alt={product.name} />

                                    </div>
                                    <div className="product-card-body">
                                        <p className="product-brand">{product.name}</p>
                                        <h5 className="product-name">
                                            <Link to={`/${product.id}`}>
                                                {product.name}
                                            </Link>
                                        </h5>
                                        <div>
                                            <span className="selling-price">Rs.{product.sale_price}</span>
                                            <span className="original-price">Rs.{product.list_price}</span>
                                        </div>
                                        <div className="mt-2">
                                            <Link to={`/productdetails/${product.id}`} className="btn btn1">View</Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    
                    <div className="row">
                        <div className="col-md-12 text-center">
                            {limit < products.length ? (
                                <button className='btn btn-warning' onClick={loadMore}>Load More</button>
                            ) : (
                                <button className='btn btn-warning' onClick={loadLess}>Load Less</button>
                            )}
                        </div>
                    </div>
                    
                </div>
            </div>
        </>
    );
    
}

export default ProductList

