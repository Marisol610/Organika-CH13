//action: an arrow fin that returns an object
// object contains the type of action, payload (optional)

export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
  };
};

export const addProductToCart = (product) => {
  return {
    type: "ADD_PRODUCT",
    payload: product,
  };
};

export const removeProductToCart = (product) => {
  return {
    type: "REMOVE_PRODUCT",
    payload: product,
  };
};
