const addToDb = (id) => {
  let shoppingCart = getFromDb();

  const count = shoppingCart[id];
  if (count) {
    const newCount = count + 1;
    shoppingCart[id] = newCount;
  } else {
    shoppingCart[id] = 1;
  }

  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};
const deleteFromDB = (id) => {
  const shoppingCart = getFromDb();
  if (id in shoppingCart) {
    delete shoppingCart[id];
    localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
  }
};
const getFromDb = () => {
  let shoppingCart = {};

  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};
const clearCart = () => {
  localStorage.removeItem("shopping-cart");
};

export { addToDb, clearCart, deleteFromDB, getFromDb };

