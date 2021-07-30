import React, { useEffect, useContext } from "react";
import AppContext from "../context/AppContext";
import Products from "../components/Products";
import retrieveProducts from "../utils/retrieveProducts";
import { LinearProgress } from "@material-ui/core";
import formatProducts from "../utils/formatProducts";

const URL_API = "https://www.themealdb.com/api/json/v1/1/search.php?f=b";
// const URL_API2 = "https://swapi.dev/api/people/1/";
const Home = () => {
  const { state, setProducts, toggleLoading } = useContext(AppContext);
  const { products, loading } = state;
  // const [url, setUrl] = React.useState(
  //   "https://www.themealdb.com/api/json/v1/1/search.php?f=b"
  // );

  useEffect(async () => {
    if (products.length <= 0) {
      toggleLoading();
      try {
        const data = await retrieveProducts(URL_API);
        if (data) {
          const meals = data.meals;
          const formattedProduct = formatProducts(meals);
          setProducts(formattedProduct);
        } else {
          toggleLoading();
        }
      } catch (error) {
        toggleLoading();
        console.log(error);
      }
    }
  }, []);

  return (
    <React.Fragment>
      {loading ? <LinearProgress /> : <Products products={products} />}
    </React.Fragment>
  );
};

export default Home;
