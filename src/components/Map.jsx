import React from "react";
import { GoogleMap, Marker, useJsApiLoader } from "@react-google-maps/api";
import { Typography } from "@material-ui/core";
const Map = ({ location }) => {
  const mapStyles = {
    height: "50vh",
    width: "100%",
  };
  const defaultCenter = {
    lat: location.lat,
    lng: location.lng,
  };
  const { isLoaded } = useJsApiLoader({
    id: "google-map-script",
    googleMapsApiKey: "AIzaSyDC-esaKsyPDBDFqsXCTqpuvHK32KDpghw",
  });

  return isLoaded ? (
    <GoogleMap mapContainerStyle={mapStyles} zoom={9} center={defaultCenter}>
      <Marker position={defaultCenter} />
    </GoogleMap>
  ) : (
    <>
      <Typography>Error with maps</Typography>
    </>
  );
};

export default Map;
