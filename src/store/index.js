import { createStore } from "redux";

// In Backend (Node.js) calling redux is like:
// const redux = require("redux");

const counterReducer = (state = { counter: 0, amount: 1 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + action.amount,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - action.amount,
    };
  }
  return state;
};

const store = createStore(counterReducer);

export default store;
