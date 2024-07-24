import { configureStore } from "@reduxjs/toolkit";

// const defaultState = {
//   login: false,
//   user: { username: "", userId: 0 },
//   basket: [],
// };

const reducer = (
  state: {
    login: boolean;
    user: { username: string; userId: number };
    basket: any[];
    products: any[];
    search: "";
    sort: "";
  } = {
    login: false,
    user: { username: "", userId: 0 },
    basket: [],
    products: [],
    search: "",
    sort: "",
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
    case "ADD_TO_BASKET":
      return {
        ...state,
        basket: [...state.basket, action.payload],
      };
    case "REMOVE_FROM_BASKET":
      return {
        ...state,
        basket: [
          ...state.basket.filter(
            (item: any) => item.productId !== action.payload
          ),
        ],
      };
    case "SET_BASKET":
      return {
        ...state,
        basket: action.payload,
      };
    case "CHANGE_QUANTITY":
      return {
        ...state,
        basket: [
          ...state.basket.map((item: any) =>
            item.productId === action.payload.productId
              ? { ...item, quantity: action.payload.quantity }
              : item
          ),
        ],
      };
    case "SET_PRODUCTS":
      return {
        ...state,
        products: action.payload,
      };
    case "LOAD_PRODUCTS":
      return {
        ...state,
        products: [...state.products, ...action.payload],
      };
    case "SEARCH":
      return {
        ...state,
        search: action.payload,
      };
    case "SET_SORT":
      return {
        ...state,
        sort: action.payload,
      };
    case "SET_CATEGORIES":
      return {
        ...state,
        categories: action.payload,
      };
    default:
      return state;
  }
};

const store = configureStore({ reducer });

export default store;
