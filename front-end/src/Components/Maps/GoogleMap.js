import React from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const key = "AIzaSyAuEEGIpPJNvBSohTdxHm3kH8r5B0Oy-Z0"

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

export default function SimpleMap(){

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <button onClick={console.log("click")}>Text</button>
    <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          markers={places}
        >
          <DirectionsRenderer>

          </DirectionsRenderer>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}