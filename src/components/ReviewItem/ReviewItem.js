import { faTrashAlt } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './ReviewItem.css'

const ReviewItem = (props) => {
    const {product, handleRemoveItem} = props;
    const {name, price, quantity, shipping, img} = product;
    return (
        <div className='review-item'>
            <div>
                <img src={img} alt="" />
            </div>
            <div className="review-item-detail">
                <div className="review-info">
                    <p>{name}</p>
                    <p><small>Price: <span className='orange-color'>${price}</span></small></p>
                    <p><small>Shipping charge: <span className='orange-color'>${shipping}</span></small></p>
                    <p><small>Quantity: <span className='orange-color'>{quantity}</span></small></p>
                </div>
                <div className="remove-btn-container">
                    <button><FontAwesomeIcon onClick={() => handleRemoveItem(product)} className='btn-icon' icon={faTrashAlt}></FontAwesomeIcon></button>
                </div>
            </div>
        </div>
    );
};

export default ReviewItem;
