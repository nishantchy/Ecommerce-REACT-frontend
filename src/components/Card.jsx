// Card.js
import React from 'react';
import { Link } from 'react-router-dom';

const Card = ({ product }) => {
    const { id, name, image, sale_price, list_price, stocks } = product;

    return (
        <div className="col-md-3">
            <div className="product-card">
                <div className="product-card-img">
                    {stocks > 0 ? (
                        <label className="stock bg-success">In Stock</label>
                    ) : (
                        <label className="stock bg-danger">Out of Stock</label>
                    )}
                    <img src={`http://127.0.0.1:8000/storage/${image}`} alt={name} />
                </div>
                <div className="product-card-body">
                    <p className="product-brand">{name}</p>
                    <h5 className="product-name">
                        <Link to={`/${id}`}>{name}</Link>
                    </h5>
                    <div>
                        <span className="selling-price">Rs.{sale_price}</span>
                        <span className="original-price">Rs.{list_price}</span>
                    </div>
                    <div className="mt-2">
                        <Link to={`/${id}`} className="btn btn1">View</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Card;
