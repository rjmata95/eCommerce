import React from "react";
import { GoogleMap, LoadScript, Marker } from "@react-google-maps/api";
const Map = ({ location }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: location.lat,
    lng: location.lng,
  };
  return (
    <LoadScript googleMapsApiKey="AIzaSyDC-esaKsyPDBDFqsXCTqpuvHK32KDpghw">
      <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
        <Marker position={defaultCenter} />
      </GoogleMap>
    </LoadScript>
  );
};

export default Map;
