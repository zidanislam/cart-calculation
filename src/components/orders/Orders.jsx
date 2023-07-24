import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import Cart from "../Cart/Cart";

const Orders = () => {
  const { cartProducts, initialCart } = useLoaderData();
  const [cart, setCart] = useState(initialCart);
  console.log(cart)
  return (
    <>
      <div className="shop-container">
        <div className="products-container">

        </div>
      </div>
      <div className="cart-container">
      <Cart cart={cart} />
      </div>
    </>
  );
};

export default Orders;
