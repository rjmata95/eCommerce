import React, { useContext } from "react";
import Product from "./Product";
import AppContext from "../context/AppContext";
import { Grid, makeStyles, Slide } from "@material-ui/core";
import {
  Dialog,
  Zoom,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button,
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
}));

const Products = ({ products }) => {
  const { state, addToCart } = useContext(AppContext);

  const classes = useStyles();
  const handleAddToCart = (product) => {
    addToCart(product);
  };
  return (
    <Grid container spacing={2}>
      {/* {console.log(`inside products: ${products}`)} */}
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
