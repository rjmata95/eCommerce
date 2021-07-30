import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { sumTotal } from "../utils/sumTotal";
import "../styles/components/Checkout.css";
import {
  IconButton,
  Button,
  Grid,
  Typography,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import Delete from "@material-ui/icons/Delete";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  return (
    <>
      <Grid
        container
        justify="space-between"
        alignContent="space-between"
        spacing={4}
      >
        <Grid item xs={12} sm={8}>
          {cart.length > 0 ? (
            <Typography variant="h4" gutterBottom>
              Lista de Pedidos:
            </Typography>
          ) : (
            <>
              <Typography variant="h4" gutterBottom>
                Your cart is empty
              </Typography>
            </>
          )}
          {cart.map((product) => (
            <List style={{ width: "100%" }}>
              <ListItem key={product.id} divider>
                <ListItemText
                  primary={product.title}
                  secondary={`$${product.price}`}
                />
                <IconButton onClick={() => handleRemove(product)}>
                  <Delete />
                </IconButton>
              </ListItem>
            </List>
          ))}
        </Grid>
        <Grid item xs={12} sm={3}>
          {cart.length > 0 ? (
            <>
              <Typography
                variant="h5"
                gutterBottom
              >{`Precio total: $ ${sumTotal(cart)}`}</Typography>
              <Button variant="contained" color="primary">
                <Link to="/checkout/information">Proceed to Checkout</Link>
              </Button>
            </>
          ) : (
            <>
              <Button variant="contained" color="primary">
                <Link to="/">Continue Shopping!</Link>
              </Button>
            </>
          )}
        </Grid>
      </Grid>
    </>
  );
};

export default Checkout;
