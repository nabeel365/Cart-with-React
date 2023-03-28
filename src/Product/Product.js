import React from 'react';
import './Product.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'


const Product = (props) => {
    
    // lec-6.....................................
    // console.log(props);
    // console.log(props.product);
    const {img, name, seller, quantity, price, ratings} = props.product;


    // lec-6.....................................
    const handleAddToCart = props.handleAddToCart;


    // const handleAddToCart = (product) => {
    //     console.log(product.name);
    // }
    return (
        <div className='products'>
            <h2>This is {name}</h2>
            <img src={img} alt="" />
            <p>Price- ${price}</p>
            <p>Manufacturer- {seller}</p>
            <p>Ratings- {ratings} stars</p>
            <button  onClick={() => handleAddToCart(props.product)} className='btn-cart'>Add to Cart
            <FontAwesomeIcon icon={faShoppingCart} />
            </button>

        </div>
    );
};

export default Product;