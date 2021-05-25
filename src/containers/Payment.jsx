import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import { sumTotal } from "../utils/sumTotal";
import PaypalBtn from "../components/PaypalBtn";
import "../styles/components/Payment.css";

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
    <div className="Payment">
      <div className="Payment-content">
        <h3>Resumen del pedido:</h3>
        {cart.map((product) => (
          <div className="Payment-item" key={product.id}>
            <div className="Payment-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
        <div className="Payment-button">
          <PaypalBtn
            amount={sumTotal(cart)}
            currency={"USD"}
            style={buttonStyles}
            onSuccess={handlePaymentSuccess}
          />
        </div>
      </div>
    </div>
  );
};

export default Payment;
