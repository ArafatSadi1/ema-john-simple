import React from 'react';
import './Cart.css'


const Cart = ({cart}) => {
    console.log(cart)
    let total = 0;
    for(const product of cart){
        total = total + product.price;
    }
    const shipping = parseFloat((total * 0.05).toFixed(2));
    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <div className='cart-detail'>
                <p>Select Items: {cart.length}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h6>grand Total: ${grandTotal}</h6>
            </div>
        </div>
    );
};

export default Cart;