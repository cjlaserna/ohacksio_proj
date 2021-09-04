import React, {useState} from 'react';
import {render} from 'react-dom';
import MapGL, {GeolocateControl, NavigationControl, FullscreenControl, ScaleControl} from 'react-map-gl';

const MAPBOX_TOKEN = 'pk.eyJ1IjoiYXJ5YW5vdmFsZWthciIsImEiOiJja3Q2Y2w0bTYwaDJwMm5vMHh0NHJydnUwIn0.jBc3OwM4kr5hJCRv9ubQgQ'; // Set your mapbox token here

const geolocateStyle = {
  top: 0,
  left: 0,
  margin: 10
};

const fullscreenControlStyle = {
  top: 36,
  left: 0,
  padding: '10px'
};

const navStyle = {
  top: 72,
  left: 0,
  padding: '10px'
};

const scaleControlStyle = {
  bottom: 36,
  left: 0,
  padding: '10px'
};

const positionOptions = {enableHighAccuracy: true};

const Map = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: 96,
    zoom: 3,
    bearing: 0,
    pitch: 0,
    width:"100vw",
    height:"100vh"
  });

  return (
    <MapGL
      {...viewport}
      
      mapboxApiAccessToken={MAPBOX_TOKEN}
      onViewportChange={setViewport}
    >
    <GeolocateControl style={geolocateStyle} positionOptions={positionOptions} trackUserLocation auto={true}/>
    <FullscreenControl style={fullscreenControlStyle} />
    <NavigationControl style={navStyle} />
    <ScaleControl style={scaleControlStyle} />
    </MapGL>
  )
}

export default Map