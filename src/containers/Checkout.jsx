import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../context/AppContext";
import { sumTotal } from "../utils/sumTotal";
import "../styles/components/Checkout.css";

const Checkout = () => {
  const { state, removeFromCart } = useContext(AppContext);
  const { cart } = state;

  const handleRemove = (product) => {
    removeFromCart(product);
  };

  // const handleSumTotal = () => {
  //   const reducer = (accumulator, currentValue) =>
  //     accumulator + currentValue.price;
  //   const sum = cart.reduce(reducer, 0);
  //   return sum;
  // };

  const handleSumTotal = () => {
    sumTotal(cart);
  };

  return (
    <div className="Checkout">
      <div className="Checkout-content">
        {cart.length > 0 ? (
          <h3>Lista de Pedidos:</h3>
        ) : (
          <React.Fragment>
            <h3>Your cart is empty</h3>
            <Link to="/">Continue Shopping!</Link>
          </React.Fragment>
        )}
        {cart.map((product) => (
          <div className="Checkout-item" key={product.id}>
            <div className="Checkout-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
            <button type="button" onClick={() => handleRemove(product)}>
              <i className="fas fa-trash-alt" />
            </button>
          </div>
        ))}
      </div>
      <div className="Checkout-sidebar">
        <h3>{`Precio total: $ ${sumTotal(cart)}`}</h3>
        <Link to="/checkout/information">
          <button>Proceed to Checkout</button>
        </Link>
      </div>
    </div>
  );
};

export default Checkout;
