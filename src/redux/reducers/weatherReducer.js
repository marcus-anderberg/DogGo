const weatherReducer = (state = {}, action) => {
  if (action.type === "SET_LOCATION") {
    return action.payload;
  }

  return state;
};

export default weatherReducer;
