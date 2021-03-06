import cartCounterReducer from "./cartCounter";
import cartProductReducer from "./cartProduct";
const { combineReducers } = require("redux");
// the idea is to combine all the redicers into one
const rootReducer = combineReducers({
  count: cartCounterReducer, // slice
  cart: cartProductReducer, // slice
});

export default rootReducer;
