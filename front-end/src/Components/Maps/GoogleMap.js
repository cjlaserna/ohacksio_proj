import React, { useState } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer } from '@react-google-maps/api';

const key = "AIzaSyCj_1kmVhtPyMCGU9VO_QZ6JtpQ5fnP_X8"

const containerStyle = {
    width: '100vw',
    height: '100%'
  };
  
  const center = {
    lat: -3.745,
    lng: -38.523
  };

  const places = [
    { latitude: 25.8103146, longitude: -80.1751609 },
    { latitude: 27.9947147, longitude: -82.5943645 },
    { latitude: 28.4813018, longitude: -81.4387899 }
  ];
  
export default function SimpleMap(){
  const [org, setOrg] = useState("9 Matthew CT, Edison NJ")
  const [dest, setDest] = useState("Jps High School")
  const [tmode, setTmode] = useState("DRIVING")
  const waypoint = [
    {location: "white house", stopover: true},
    {location: "Hardee's 519 S Bay Rd Dover, DE 19901", stopover: true},
    {location: "Tucquan Park Family Campground 917 River Rd Holtwood, PA 17532", stopover: true},
    {location: "Claremont Airport 58M ", stopover: true},
    //{location: "", stopover: true},
    //{location: "", stopover: true},
    //{location: "", stopover: true},
    //{location: "", stopover: true},
    //{location: "", stopover: true},
  ]

  const [checker, setChecker] = useState(0)

  const [mapData, setMapData] = useState("bruh")

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      if (checker<1){
          setMapData(response)
          setChecker(checker+1)
          console.log(response)
        }
      }
    }
    

  const click = () => {
    console.log("bruh")
    setOrg("edison")
    setChecker(0)
  }

  return (
    <div style={{ height: '100vh', width: '100%' }}>
    <button onClick = {click}>bruh</button>
    <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={10}
          markers={places}
        >
          <DirectionsService options ={{
            destination: dest,
            origin: org,
            waypoints: waypoint,
            travelMode: tmode,
            optimizeWaypoints: true
          }}
          callback={directionsCallback}/>
          <DirectionsRenderer directions={mapData}/>
        </GoogleMap>
      </LoadScript>
    </div>
  );
}