import { getFromDb } from "../../utilities/localdb";

export const productCartLoader = async () => {
  const cartData = await fetch("products.json");
  const cartProducts = await cartData.json();

  const savedCart = getFromDb();
  const initialCart = [];
  for (const id in savedCart) {
    const addedProducts = cartProducts.find((product) => product.id === id);

    if (addedProducts) {
      const quantity = addedProducts[id];
      addedProducts.quantity = quantity;
      initialCart.push(addedProducts);
    }
  }

  return { cartProducts, initialCart };
};