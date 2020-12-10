//action: an arrow fin that returns an object
// object coantains rhe typw of action, payload (optional)

export const increaseCounter = () => {
  return {
    type: "INCREASE_COUNTER",
  };
};
