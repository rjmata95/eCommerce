import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import "../styles/components/Information.css";
import { Button, Container, Grid, Icon, Typography } from "@material-ui/core";
import FormUI from "../components/FormsUI/";
import ArrowBack from "@material-ui/icons/ArrowBack";
import { useFormikContext } from "formik";

const Information = ({ history }) => {
  const { state, addToBuyer } = useContext(AppContext);
  const form = useRef(null);
  const { cart, buyer } = state;

  // const { values } = useFormikContext();
  const handleSubmit = (values) => {
    // const formData = new FormData(form.current);
    // const buyer = {
    //   name: formData.get("name"),
    //   email: formData.get("email"),
    //   address: formData.get("address"),
    //   city: formData.get("city"),
    //   state: formData.get("state"),
    //   country: formData.get("country"),
    //   zipcode: formData.get("zipcode"),
    //   phone: formData.get("phone"),
    // };
    console.log(values);

    // console.log(errors);

    addToBuyer(values);
    history.push("/checkout/payment");
  };
  const handleChange = (ev) => {
    const { name, value } = ev.target;
    addToBuyer({
      [name]: value,
    });

    console.log(buyer);
  };

  return (
    <>
      <FormUI
        onSubmit={handleSubmit}
        backBtn={
          <Button variant="contained" color="primary" startIcon={<ArrowBack />}>
            <Link to="/checkout">Back</Link>
          </Button>
        }
        submitBtn={
          <Button variant="contained" color="primary" type="submit">
            Go to payment
          </Button>
        }
      />
    </>
    // <div className="Information">
    //   <div className="Information-content">
    //     <div className="Information-head">
    //       <h2>Informacion de contacto:</h2>
    //     </div>
    //     <div className="Information-form">
    //       <form ref={form}>
    //         <input type="text" placeholder="Full name" name="name" />
    //         <input type="text" placeholder="Email" name="email" />
    //         <input type="text" placeholder="Address" name="address" />
    //         <input type="text" placeholder="City" name="city" />
    //         <input type="text" placeholder="State" name="state" />
    //         <input type="text" placeholder="Country" name="country" />
    //         <input type="text" placeholder="Zip Code" name="zipcode" />
    //         <input type="text" placeholder="Phone number" name="phone" />
    //       </form>
    //     </div>
    //     <div className="Information-buttons">
    //       <div className="Information-back">
    //         <Link to="/checkout">Back</Link>
    //       </div>
    //       <div className="Information-next">
    //         <button type="button" onClick={handleSubmit}>
    //           pagar
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="Information-sidebar">
    //     <h3>Pedido:</h3>
    //     {cart.map((product) => (
    //       <div className="Information-item" key={product.id}>
    //         <div className="Information-element">
    //           <h4>{product.title}</h4>
    //           <span>${product.price}</span>
    //         </div>
    //       </div>
    //     ))}
    //   </div>
    // </div>
  );
};

export default Information;
