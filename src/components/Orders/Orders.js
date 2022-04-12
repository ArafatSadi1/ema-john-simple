import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import Cart from "../Cart/Cart";
import ReviewItem from "../ReviewItem/ReviewItem";
import "./Orders.css";

const Orders = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemoveItem = (product) => {
    const rest = cart.filter((pd) => pd.id !== product.id);
    setCart(rest);
  };
  return (
    <div className="shop">
      <div className="review-item-container">
        <div>
          {cart.map((product) => (
            <ReviewItem
              key={product.id}
              product={product}
              handleRemoveItem={handleRemoveItem}
            ></ReviewItem>
          ))}
        </div>
      </div>
      <div className="cart">
        <Cart key={cart.id} cart={cart}>
          <Link to="/shipment">
            <button>Proceed Shipment</button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Orders;
