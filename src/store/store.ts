import { configureStore } from "@reduxjs/toolkit";

const defaultState = {
  login: false,
  user: { username: "", userId: 0 },
  basket: [],
};

const reducer = (
  state: {
    login: boolean;
    user: { username: string; userId: number };
    basket: any[];
  } = {
    login: false,
    user: { username: "", userId: 0 },
    basket: [],
  },
  action: any
) => {
  switch (action.type) {
    case "LOGIN":
      return {
        ...state,
        login: true,
        user: action.payload,
      };
    case "LOGOUT":
      return {
        ...state,
        login: false,
        user: { username: "", userId: 0 },
      };
    case "ADD_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "SET_BASKET":
      return {
        ...state,
        basket: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
