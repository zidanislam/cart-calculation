import { getFromDb } from "../../utilities/localdb";

export const productCartLoader = async () => {
  const cartData = await fetch("products.json");
  const products = await cartData.json();

  const savedCart = getFromDb();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProducts = products.find((product) => product.id === id);

    if (addedProducts) {
      const quantity = savedCart[id];
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
      
    }
  }

  return { products, initialCart };
};