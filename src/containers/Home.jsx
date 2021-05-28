import React, { useState, useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import initialState from "../initialState";
import Products from "../components/Products";
import retrieveProducts from "../utils/retrieveProducts";
import { LinearProgress } from "@material-ui/core";

const URL_API = "https://www.themealdb.com/api/json/v1/1/search.php?f=a";
const URL_API2 = "https://swapi.dev/api/people/1/";
const Home = () => {
  const { state, addProducts, toggleLoading } = useContext(AppContext);
  const { products, loading } = state;

  useEffect(async () => {
    const data = await retrieveProducts(URL_API);
    console.log(`on use effect`);
    console.log(data);
    if (data) {
      addProducts(data.meals);
      toggleLoading();
    }
  }, []);

  return (
    <React.Fragment>
      {console.log(`on home: ${products}`)}
      {console.log(products)}
      {loading ? <LinearProgress /> : <Products products={products} />}
    </React.Fragment>
  );
};

export default Home;
