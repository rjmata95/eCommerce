import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleLoading = () => {
    setState({
      ...state,
      loading: !state.loading,
    });
  };
  const addProducts = (payload) => {
    setState({
      ...state,
      products: [...state.products, payload],
    });
  };
  const addToCart = (payload) => {
    setState({
      ...state,
      cart: [...state.cart, payload],
    });
  };

  const removeFromCart = (payload) => {
    setState({
      ...state,
      cart: state.cart.filter((items) => items.id !== payload.id),
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload,
    });
  };

  const addNewOrder = (payload) => {
    setState({
      ...state,
      orders: [...state.orders, payload],
    });
  };

  return {
    toggleLoading,
    addProducts,
    addToCart,
    removeFromCart,
    addToBuyer,
    state,
    addNewOrder,
  };
};

export default useInitialState;
