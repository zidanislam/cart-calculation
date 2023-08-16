import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { addToDb, clearCart, getFromDb } from "../../utilities/localdb";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import "./Shop.css";

const Shop = () => {
  const products = useLoaderData();
  const [cart, setCart] = useState([]);
  console.log(cart);

  useEffect(() => {
    const savedItem = getFromDb();
    const savedcart = [];
    for (const id in savedItem) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        const quantity = savedItem[id];
        addedProduct.quantity = quantity;
        savedcart.push(addedProduct);
      }
    }
    setCart(savedcart);
  }, [products]);

  const handleAddToCart = (selectedProduct) => {
    const exist = cart.find((product) => product.id === selectedProduct.id);
    let newCart = [];
    if (!exist) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      exist.quantity = exist.quantity + 1;
      newCart = [...rest, exist];
    }
    // cart.push(product);
    setCart(newCart);
    addToDb(selectedProduct.id);
  };
  const deleteCart = () => {
    setCart([]);
    clearCart();
  };

  return (
    <div className="shop-container">
      <div className="products-container">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          ></Product>
        ))}
      </div>
      <div className="review-cart">
        <Cart cart={cart} deleteCart={deleteCart} />
      </div>
    </div>
  );
};

export default Shop;
