import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import { clearCart, deleteFromDB } from "../../utilities/localdb";
import Cart from "../Cart/Cart";
import ReeviewProduct from "../reviewProduct/ReeviewProduct";
import "./orders.css";

const Orders = () => {
  const { initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  const deleteProduct = (id) => {
    const remaining = cart.filter((product) => product.id !== id);
    setCart(remaining);
    deleteFromDB(id);
  };
  const deleteCart = () => {
    setCart([]);
    clearCart();
  };
  return (
    <div className="shop-container">
      <div className="product-container">
        {cart.map((product) => (
          <ReeviewProduct
            key={product.id}
            product={product}
            deleteProduct={deleteProduct}
          />
        ))}
      </div>

      <div className="cart-container">
        <Cart cart={cart} deleteCart={deleteCart} />
      </div>
    </div>
  );
};

export default Orders;
