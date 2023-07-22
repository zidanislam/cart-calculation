import React from "react";
import { clearCart } from "../../utilities/localdb";
import "./cart.css";

const Cart = ({ cart }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    const { price, shipping } = product;
    quantity = quantity + product.quantity;
    total = total + price * quantity;
    totalShipping = totalShipping + shipping * quantity;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = tax + total + totalShipping;

  const resetCart = (id) => {
    clearCart(id);
  };
  return (
    <div className="details">
      <h3>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping: $ {totalShipping}</p>
      <p>TAX: $ {tax}</p>
      <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
      <div className="btn-group">
        <button className="clear cart-btn" onClick={() => resetCart()}>
          Clear Cart
        </button>
        <button className="checkout-btn cart-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
