import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { sumTotal } from "../utils/sumTotal";
import PaypalBtn from "../components/PaypalBtn";
import {
  Avatar,
  Grid,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Paper,
  Typography,
} from "@material-ui/core";
const Payment = ({ history }) => {
  const { state, addNewOrder } = useContext(AppContext);
  const { cart, buyer } = state;

  const paypalOptions = {
    clientId:
      "Aac_Z0FLzu9CmpWo25LTk7pP1y52k6g1800EhBYiZtz0i3Pue5csvRXLXS-EMC_O2KOp7e7IleYPam-3",
    intent: "capture",
    currency: "USD",
  };

  const buttonStyles = {
    layout: "vertical",
    shape: "pill",
    size: "responsive",
  };

  // const totalPrice = sumTotal(cart);

  const handlePaymentSuccess = (data) => {
    if (data.payerID !== null) {
      const newOrder = {
        buyer: buyer,
        product: cart,
        payment: data,
      };
      addNewOrder(newOrder);
      history.push("/checkout/success");
    }
  };

  return (
    <Grid container justify="space-between" alignItems="center" spacing={4}>
      <Grid item container md={5} xs={12}>
        <Grid item xs={12}>
          <Typography gutterBottom variant="h4">
            Resumen del pedido:
          </Typography>
        </Grid>
        {cart.map((product) => (
          <Grid xs={12} item className="Payment-item" key={product.id}>
            <List>
              <ListItem divider>
                <ListItemAvatar>
                  <Avatar alt={product.title} src={product.image} />
                </ListItemAvatar>
                <ListItemText primary={product.title} />
                <Typography variant="subtitle1">${product.price}</Typography>
              </ListItem>
            </List>
          </Grid>
        ))}
      </Grid>
      <Grid item md={5} xs={12}>
        <PaypalBtn
          amount={sumTotal(cart)}
          currency={"USD"}
          style={buttonStyles}
          onSuccess={handlePaymentSuccess}
        />
      </Grid>
    </Grid>
  );
};

export default Payment;
