const addToDb = (id) => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }

  // add quantity
  const quantity = shoppingCart[id];
  if (quantity) {
    const newQuantity = quantity + 1;
    shoppingCart[id] = newQuantity;
  } else {
    shoppingCart[id] = 1;
  }
  localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
};

const addToCartProducts = (products) => {
  // let shoppingCart = {};

  //get the shopping cart from local storage
  // const storedCart = localStorage.getItem("shopping-cart");
  // if (storedCart) {
  //   shoppingCart = JSON.parse(storedCart);
  // }

  // // add quantity
  // const quantity = shoppingCart[id];
  // if (quantity) {
  //   const newQuantity = quantity + 1;
  //   shoppingCart[id] = newQuantity;
  // } else {
  //   shoppingCart[id] = 1;
  // }
  localStorage.setItem("cartProducts", JSON.stringify(products));
};


const getStoredCart = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const getCartProducuts = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("cartProducts");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

const removeFromDb = (id) => {
  const storedCart = localStorage.getItem("shopping-cart");
  if (storedCart) {
    const shoppingCart = JSON.parse(storedCart);
    if (id in shoppingCart) {
      delete shoppingCart[id];
      localStorage.setItem("shopping-cart", JSON.stringify(shoppingCart));
    }
  }
};

const deleteShoppingCart = () => {
  localStorage.removeItem("shopping-cart");
};
const deleteCartProduct = () => {
  localStorage.removeItem("shopping-cart");
};


const addToUserAddress = (address) => {
  localStorage.setItem("userAddres", JSON.stringify(address));
};
const getToUserAddress = () => {
  let shoppingCart = {};

  //get the shopping cart from local storage
  const storedCart = localStorage.getItem("userAddres");
  if (storedCart) {
    shoppingCart = JSON.parse(storedCart);
  }
  return shoppingCart;
};

export { addToDb, getStoredCart, removeFromDb, deleteShoppingCart, addToCartProducts, getCartProducuts, deleteCartProduct, addToUserAddress, getToUserAddress};
