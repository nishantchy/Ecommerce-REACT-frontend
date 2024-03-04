// CardContainer.js
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Card from './Card';

const CardContainer = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get(`http://127.0.0.1:8000/api/product`);
                setProducts(response.data);
            } catch (err) {
                console.log(err);
            }
        };
        fetchData();
    }, []);

    return (
        <div className="container-fluid my-3">
            <div className="row row-cols-1 row-cols-md-2 g-4">
                {Array.isArray(products) && products.map(product => (
                    <Card product={product} key={product.id} />
                ))}
            </div>
        </div>
    );
}

export default CardContainer;
