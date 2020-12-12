const cartProductReducer = (state = [], action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      var copy = [...state]; // clone the state
      copy.push(action.payload);
      return copy;

    case "REMOVE_PRODUCT":
      return state.filter((pc) => pc.product.id !== action.payload.product.id);
  }

  return state;
};

export default cartProductReducer;
