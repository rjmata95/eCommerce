import { useState } from "react";
import initialState from "../initialState";

const useInitialState = () => {
  const [state, setState] = useState(initialState);

  const toggleLoading = () => {
    setState((state) => ({
      ...state,
      loading: !state.loading,
    }));
  };

  const setProducts = (payload) => {
    Array.isArray(payload)
      ? setState({
          ...state,
          products: [...payload],
        })
      : setState({
          ...state,
          products: [payload],
        });
  };

  const setUser = (payload) => {
    setState((prevState) => ({
      ...prevState,
      user: {
        profile: payload?.profile,
        token: payload?.token,
      },
    }));
  };
  const addProducts = (payload) => {
    Array.isArray(payload)
      ? setState({
          ...state,
          products: [...state.products, ...payload],
        })
      : setState({
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
  const clearCart = () => {
    setState({
      ...state,
      cart: [],
    });
  };

  const addToBuyer = (payload) => {
    setState({
      ...state,
      buyer: payload,
    });
  };

  const addNewOrder = (payload) => {
    console.log(payload, "hook");
    setState({
      ...state,
      orders: [...state.orders, payload],
      cart: [],
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
    setProducts,
    setUser,
    clearCart,
  };
};

export default useInitialState;
