import React from 'react';
import './product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
const Product = (props) => {
    const {addToCart, product} = props;
    const {name, price, img, ratings, seller} = product;
    return (
        <div className='product'>
            <img src={img} alt="" />
            <div className='product-info'>
                <h6 className='product-name'>{name}</h6>
                <p>Price : ${price}</p>
                <div className='product-small'>
                    <p><small>Manufacturer : {seller}</small></p>
                    <p><small>Ratings : {ratings} Star</small></p>
                </div>
            </div>
            <button onClick={()=>addToCart(product)} className='cart-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faCartShopping}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Product;