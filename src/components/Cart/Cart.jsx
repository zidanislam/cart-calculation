import React from "react";
import "./cart.css";

const Cart = ({ cart, deleteCart }) => {
  let total = 0;
  let totalShipping = 0;
  let quantity = 0;
  for (const product of cart) {
    const { price, shipping } = product;
    quantity = quantity + product.quantity;
    total = total + price * product.quantity;
    totalShipping = totalShipping + shipping * product.quantity;
  }
  let tax = parseFloat((total * 0.1).toFixed(2));
  let grandTotal = tax + total + totalShipping;

  return (
    <div className="details">
      <h3>Order Summary</h3>
      <p>Selected Items: {quantity}</p>
      <p>Total Price: $ {total}</p>
      <p>Total Shipping: $ {totalShipping}</p>
      <p>TAX: $ {tax}</p>
      <h4>Grand Total: $ {grandTotal.toFixed(2)}</h4>
      <div className="btn-group">
        <button className="clear cart-btn" onClick={() => deleteCart()}>
          Clear Cart
        </button>
        <button className="checkout-btn cart-btn">Checkout</button>
      </div>
    </div>
  );
};

export default Cart;
