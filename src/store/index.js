import { createStore } from "redux";

// In Backend (Node.js) calling redux is like:
// const redux = require("redux");

const counterReducer = (state = { counter: 0 }, action) => {
  if (action.type === "increment") {
    return {
      counter: state.counter + 1,
    };
  }
  if (action.type === "decrement") {
    return {
      counter: action.counter - 1,
    };
  }
};

const store = redux.createStore(counterReducer);

store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });

export default store;
