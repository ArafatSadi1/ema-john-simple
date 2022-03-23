import React from 'react';
import './Cart.css'
const Cart = ({cart}) => {
    return (
        <div>
            <h5>Order Summery</h5>
            <div className='cart-detail'>
                <p>Select Items: {cart.length}</p>
            </div>
        </div>
    );
};

export default Cart;