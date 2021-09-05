import React from "react";
import { GoogleMap, LoadScript,DirectionsService,DirectionsRenderer } from '@react-google-maps/api';

const directionsService = new DirectionsService();
const directionsRenderer = new DirectionsRenderer();

const containerStyle = {
    width: '100%',
    height: '100vh'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const onClick = () => {
      console.log("bruh")
  }

  const places = [
    { latitude: 25.8103146, longitude: -80.1751609 },
    { latitude: 27.9947147, longitude: -82.5943645 },
    { latitude: 28.4813018, longitude: -81.4387899 }
  ];

  const calcRoute = () => {
    console.log("calculating route")
    directionsService.route({
        origin: "9 Matthew Ct",
        destination: "1 Alexis Lane",
        travelMode: 'DRIVING',
      })
      .then((response) => {directionsRenderer.setDirections(response);})
      .catch((e) => window.alert("Directions request failed due to something"));
  }

export default function SimpleMap(){

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <button onClick={calcRoute}>Text</button>
    <LoadScript googleMapsApiKey="AIzaSyAuEEGIpPJNvBSohTdxHm3kH8r5B0Oy-Z0">
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          markers={places}
        />
      </LoadScript>
    </div>
  );
}