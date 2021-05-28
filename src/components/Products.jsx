import React, { useContext } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
// import "../styles/components/Products.css";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Products = () => {
  const { state, addToCart } = useContext(AppContext);
  const { products } = state;
  const classes = useStyles();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
          <Product
            key={product.idMeal}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      ))}
      {/* {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      ))}
      {products.map((product) => (
        <Grid item xs={12} sm={6} md={4} lg={3} className={classes.root}>
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        </Grid>
      ))} */}
    </Grid>
  );
};

export default Products;
