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

///////////////////////////////////////////////

// import { PayPalButton } from "react-paypal-button-v2";
// import React from "react";
// export function PaypalBtn(props) {
//   const { amount, currency } = props;
//   const paypalKey =
//     "Aac_Z0FLzu9CmpWo25LTk7pP1y52k6g1800EhBYiZtz0i3Pue5csvRXLXS-EMC_O2KOp7e7IleYPam-3";

//   const paypalOnApprove = (data, detail) => {
//     // call the backend api to store transaction details
//     console.log("Paypal approved");
//     console.log(data);
//   };

//   const paypalSubscribe = (data, actions) => {
//     return actions.subscription.create({
//       plan_id: "<plan-id>",
//     });
//   };

//   const paypalOrder = (data, actions) => {
//     return actions.order.create({
//       intent: "CAPTURE",
//       purchase_units: [
//         {
//           description: "tst product",
//           amount: {
//             currency_code: "USD",
//             value: 65.0,
//           },
//         },
//       ],
//     });
//   };

//   const paypalOnError = (err) => {
//     console.log(err);
//   };

//   const paypalOnCatchError = (err) => {
//     console.log(err);
//   };

//   const paypalOnCancel = (err) => {
//     console.log(`user cancelled transaction: ${err}`);
//   };
//   return (
//     <PayPalButton
//       amount={amount}
//       currency={currency}
//       createOrder={(data, details) => paypalOrder(data, details)}
//       onApprove={(data, details) => paypalOnApprove(data, details)}
//       onError={(err) => paypalOnError(err)}
//       catchError={(err) => paypalOnCatchError(err)}
//       onCancel={(err) => paypalOnCancel(err)}
//       options={{
//         clientId: paypalKey,
//         vault: true,
//       }}
//       style={{
//         shape: "rect",
//         color: "blue",
//         layout: "horizontal",
//         // label: "subscribe",
//       }}
//     />
//   );
// }
// export default PaypalBtn;

//////////////////////////////////////////////

// import React, { useRef, useEffect } from "react";

// const PaypalBtn = ({ amount, currency }) => {
//   const paypal = useRef();

//   useEffect(() => {
//     window.paypal.Buttons({
//       createOrder: (data, actions, err) => {
//         return actions.order.create({
//           intent: "CAPTURE",
//           purchase_units: [
//             {
//               description: "test item",
//               amount: {
//                 currency_code: currency,
//                 value: amount,
//               },
//             },
//           ],
//         });
//       },
//       onApprove: async (data, actions) => {
//         const order = await actions.order.capture();
//         console.log(order);
//       },
//       onError: (err) => {
//         console.log(err);
//       },
//     });
//   }, []).render(paypal.current);
//   return (
//     <div>
//       <div ref={paypal}></div>
//     </div>
//   );
// };

// export default PaypalBtn;
