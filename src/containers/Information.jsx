import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "../styles/components/Information.css";

const Information = ({ history }) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart } = state;

  const handleSubmit = () => {
    const formData = new FormData(form.current);
    const buyer = {
      name: formData.get("name"),
      email: formData.get("email"),
      address: formData.get("address"),
      city: formData.get("city"),
      state: formData.get("state"),
      country: formData.get("country"),
      zipcode: formData.get("zipcode"),
      phone: formData.get("phone"),
    };

    addToBuyer(buyer);
    history.push("/checkout/payment");
  };
  return (
    <div className="Information">
      <div className="Information-content">
        <div className="Information-head">
          <h2>Informacion de contacto:</h2>
        </div>
        <div className="Information-form">
          <form ref={form}>
            <input type="text" placeholder="Full name" name="name" />
            <input type="text" placeholder="Email" name="email" />
            <input type="text" placeholder="Address" name="address" />
            <input type="text" placeholder="City" name="city" />
            <input type="text" placeholder="State" name="state" />
            <input type="text" placeholder="Country" name="country" />
            <input type="text" placeholder="Zip Code" name="zipcode" />
            <input type="text" placeholder="Phone number" name="phone" />
          </form>
        </div>
        <div className="Information-buttons">
          <div className="Information-back">
            <Link to="/checkout">Back</Link>
          </div>
          <div className="Information-next">
            <button type="button" onClick={handleSubmit}>
              pagar
            </button>
          </div>
        </div>
      </div>
      <div className="Information-sidebar">
        <h3>Pedido:</h3>
        {cart.map((product) => (
          <div className="Information-item" key={product.id}>
            <div className="Information-element">
              <h4>{product.title}</h4>
              <span>${product.price}</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Information;
