import React, {useState, useCallback} from 'react';
import {render} from 'react-dom';
import MapGL, {GeolocateControl, NavigationControl, FullscreenControl, ScaleControl, Source} from 'react-map-gl';

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
    latitude: 0,
    longitude: 0,
    zoom: 3,
    bearing: 0,
    pitch: 0,
    width:"100%",
    height:"100vh"
  });

  const onMapLoad = useCallback(evt => {
    const map = evt.target;
    map.setTerrain({source: 'mapbox-dem', exaggeration: 1.5});
  }, []);

  return (
    <MapGL
      {...viewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
      mapStyle="mapbox://styles/aryanovalekar/ckt6gmoy32zse17upfl1n30h7"
      onViewportChange={setViewport}
      onLoad={onMapLoad}
    >
    <GeolocateControl style={geolocateStyle} positionOptions={positionOptions} trackUserLocation auto showAccuracyCircle={false}/>
    <FullscreenControl style={fullscreenControlStyle} />
    <NavigationControl style={navStyle} />
    <ScaleControl style={scaleControlStyle} />
    <Source
          id="mapbox-dem"
          type="raster-dem"
          url="mapbox://mapbox.mapbox-terrain-dem-v1"
          tileSize={512}
          maxzoom={14}
        />
    </MapGL>
  )
}

export default Map