import React, { useContext, useState } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "../styles/components/Success.css";
import {
  Grid,
  Typography,
  GridList,
  GridListTile,
  GridListTileBar,
  makeStyles,
} from "@material-ui/core";
import { red } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "508px",
    overflow: "auto",
  },
  img: {
    width: "100%",
  },
}));

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer, orders, cart } = state;
  const location = useGoogleAddress(buyer.address);
  const classes = useStyles();
  return (
    <Grid container spacing={4}>
      {console.log(orders)}
      <Grid item xs={12}>
        <Typography variant="h4">{`Dear ${
          buyer.firstName || "customer"
        }, thanks for your purchase`}</Typography>
        <Typography variant="subtitle1">
          {`Your order ${orders} is arriving in 3 days to:`}
        </Typography>
      </Grid>
      <Grid item xs={12} md={6}>
        <GridList className={classes.root}>
          {cart &&
            cart.map((product) => (
              <GridListTile key={product.title}>
                <img
                  alt={product.title}
                  src={product.image}
                  className={classes.img}
                />
                <GridListTileBar title={product.title} />
              </GridListTile>
            ))}
        </GridList>
      </Grid>
      <Grid item xs={12} md={6}>
        <Map location={location} />
      </Grid>
    </Grid>
  );
};

export default Success;
