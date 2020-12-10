// reducer: is a simple function that recieve that state and action
// should return a new state
// initialize the state with a number in this case (0)
// return the state

const cartCounterReducer = (state = 0, action) => {
  if (action.type === "INCREASE_COUNTER") {
    return state + 1; // increase the counter
  }
  return state;
};

export default cartCounterReducer;
