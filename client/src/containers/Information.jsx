import React, { useRef, useContext } from "react";
import AppContext from "../context/AppContext";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import FormUI from "../components/FormsUI/";
import ArrowBack from "@material-ui/icons/ArrowBack";
// import { useFormikContext } from "formik";

const Information = ({ history }) => {
  const { addToBuyer } = useContext(AppContext);
  // const form = useRef(null);

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

    addToBuyer(values);
    history.push("/checkout/payment");
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
  );
};

export default Information;
