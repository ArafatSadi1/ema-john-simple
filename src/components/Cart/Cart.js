import React from 'react';
import './Cart.css'


const Cart = (props) => {
    const {cart, children} = props;
    console.log(children)
    let total = 0;
    let totalItem = 0;
    for(const product of cart){
        total = total + product.price * product.quantity;
        totalItem = totalItem + product.quantity;
    }
    const shipping = parseFloat((total * 0.05).toFixed(2));
    const tax = Number((total * 0.1).toFixed(2));
    const grandTotal = (total + shipping + tax).toFixed(2);
    return (
        <div className='cart'>
            <h5>Order Summery</h5>
            <div className='cart-detail'>
                <p>Select Items: {totalItem}</p>
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${shipping}</p>
                <p>Tax: ${tax}</p>
                <h6>grand Total: ${grandTotal}</h6>
                {children}
            </div>
        </div>
    );
};

export default Cart;