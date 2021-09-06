import React, { useState, useEffect } from "react";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Circle, Marker } from '@react-google-maps/api';
import './Switch.css'

const key = "AIzaSyCj_1kmVhtPyMCGU9VO_QZ6JtpQ5fnP_X8"

const containerStyle = {
    width: '100%',
    height: '100%'
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

  const [center, setCenter] = useState({lat: -3.745,lng: -38.523})

  const [userLoc, setUserLoc] = useState({lat: -3.745,lng: -38.523})

  const [mapData, setMapData] = useState("bruh")

  const [zoom, setZoom] = useState(10)

  const [locationer, setLocationer] = useState(false)

  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
      if (checker<1){
          setMapData(response)
          setChecker(checker+1)
          console.log(response)
        }
      }
    }

  const geoLocate = () => {
    navigator.geolocation.getCurrentPosition(function(position){
      console.log("User is at ", position.coords.latitude, ", ", position.coords.longitude, ", locationer is " + locationer);
      setUserLoc({lat: position.coords.latitude, lng: position.coords.longitude})
      if (locationer){
        setCenter({lat: position.coords.latitude, lng: position.coords.longitude})
        setZoom(17)
    }
    });
  }

  useEffect(() => {
    const interval = setInterval(() => {
      geoLocate()
    }, 1000);
    return () => clearInterval(interval);
  }, [locationer]);

  function handleClick(e) {
    e.preventDefault();
    setLocationer(!locationer);
    console.log(locationer)
}

function handleDrag() {
  setLocationer(false);
  console.log(locationer)
}

  return (
    <div style={{ height: '100%', width: '100%' }}>
    
    <LoadScript googleMapsApiKey={key}>
        <GoogleMap
          mapContainerStyle={containerStyle}
          center={center}
          zoom={zoom}
          markers={places}
          onDragStart={handleDrag}
        >
          <button href="#" onClick={handleClick} class="switch">
            Click me
            </button>
          <Marker position={userLoc} zIndex={100}/>
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