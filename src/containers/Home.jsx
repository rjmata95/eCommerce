import React from "react";
import initialState from "../initialState";
import Products from "../components/Products";

const Home = () => {
  return (
    <React.Fragment>
      <Products products={initialState.products} />
      <Products products={initialState.products} />
      <Products products={initialState.products} />
      <Products products={initialState.products} />
      <Products products={initialState.products} />
    </React.Fragment>
  );
};

export default Home;
