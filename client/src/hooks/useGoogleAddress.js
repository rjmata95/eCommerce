import { useState, useEffect } from "react";
import axios from "axios";

const useGoogleAddress = (address) => {
  const [map, setMap] = useState({});
  const API_KEY = "AIzaSyDC-esaKsyPDBDFqsXCTqpuvHK32KDpghw";
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${API_KEY}`;

  useEffect(async () => {
    try {
      if (!address) throw "Addresss not defined";
      const response = await axios(API);
      setMap(response.data.results[0].geometry.location);
    } catch (error) {
      console.log(`${error}, Guatire will be default`);
      let Guatire = {
        lat: 10.476296,
        lng: -66.554415,
      };
      setMap(Guatire);
    }
  }, []);
  return map;
};

export default useGoogleAddress;
