import React, { useContext } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
import { Grid, makeStyles } from "@material-ui/core";

const useStyles = makeStyles(() => ({
  root: {
    flexGrow: 1,
  },
}));

const Products = ({ products }) => {
  const { addToCart } = useContext(AppContext);

  const classes = useStyles();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <Grid container spacing={2}>
      {products.map((product) => (
        <>
          <Grid
            item
            key={product.id}
            xs={12}
            sm={6}
            md={4}
            lg={3}
            className={classes.root}
          >
            <Product product={product} handleAddToCart={handleAddToCart} />
          </Grid>
        </>
      ))}
    </Grid>
  );
};

export default Products;
