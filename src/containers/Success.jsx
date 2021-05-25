import React, { useContext } from "react";
import AppContext from "../context/AppContext";
import Map from "../components/Map";
import useGoogleAddress from "../hooks/useGoogleAddress";
import "../styles/components/Success.css";

const Success = () => {
  const { state } = useContext(AppContext);
  const { buyer } = state;
  const location = useGoogleAddress(buyer.address);
  return (
    <div className="Success">
      <div className="Success-contet">
        <h2>{`${buyer.name}, Gracias por tu compra`}</h2>
        <span>Tu pedido llegara en 3 dias a tu direccion:</span>
        <div className="Success-map">
          <Map location={location} />
        </div>
      </div>
    </div>
  );
};

export default Success;
