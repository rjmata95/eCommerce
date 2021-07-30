import React from "react";
import ReactDOM from "react-dom";

const PayPalButton = window.paypal.Buttons.driver("react", { React, ReactDOM });

const PaypalBtn = ({ onSuccess, amount, style }) => {
  const createOrder = (data, actions) => {
    return actions.order.create({
      purchase_units: [
        {
          amount: {
            value: amount,
          },
        },
      ],
    });
  };

  const onApprove = (data, actions) => {
    console.log(this);
    if (onSuccess) onSuccess(data);
    return actions.order.capture();
  };
  const onCancel = (data, actions) => {
    console.log(data);
  };

  const onError = (err) => {
    console.log(err);
  };

  return (
    <PayPalButton
      createOrder={(data, actions) => createOrder(data, actions)}
      onApprove={(data, actions) => onApprove(data, actions)}
      onCancel={(data, actions) => onCancel(data, actions)}
      onError={(err) => onError(err)}
      style={style}
    />
  );
};

export default PaypalBtn;
