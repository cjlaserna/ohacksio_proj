import React, {useState, useEffect} from 'react';
import {render} from 'react-dom';
import {StaticMap} from 'react-map-gl';
import {AmbientLight, PointLight, LightingEffect} from '@deck.gl/core';
import DeckGL, { GeoJsonLayer, ArcLayer } from 'deck.gl';
import {TripsLayer} from '@deck.gl/geo-layers';
import {MapboxLayer} from '@deck.gl/mapbox';
import './Background.css'
import MenuBar from '../MenuBar';
import { Link } from 'react-router-dom';

const DATA_URL = {
    TRIPS: 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json' // eslint-disable-line
  };
  
  const ambientLight = new AmbientLight({
    color: [255, 255, 255],
    intensity: 0.0
  });
  
  const pointLight = new PointLight({
    color: [255, 255, 255],
    intensity: 2.0,
    position: [-75, 40, 8000]
  });
  
  const lightingEffect = new LightingEffect({ambientLight, pointLight});
  
  const material = {
    ambient: 0.1,
    diffuse: 0.6,
    shininess: 32,
    specularColor: [60, 64, 70]
  };
  
  const DEFAULT_THEME = {
    trailColor1: [255, 84, 0],
    trailColor0: [12, 102, 255],
    material,
    effects: [lightingEffect]
  };
  
  const INITIAL_VIEW_STATE = {
    longitude: -73.99,
    latitude: 40.7199,
    zoom: 13.5,
    pitch: 45,
    bearing: 0
  };
  
  const MAP_STYLE = 'https://basemaps.cartocdn.com/gl/dark-matter-nolabels-gl-style/style.json';

const Background = () => {
    const trips = 'https://raw.githubusercontent.com/visgl/deck.gl-data/master/examples/trips/trips-v7.json'
    const trailLength = 180
    const initialViewState = INITIAL_VIEW_STATE
    const mapStyle = MAP_STYLE
    const theme = DEFAULT_THEME
    const loopLength = 2100 // unit corresponds to the timestamp in source data
    const animationSpeed = 1

    const [time, setTime] = useState(0);
  const [animation] = useState({});

  const animate = () => {
    setTime(t => (t + animationSpeed) % loopLength);
    animation.id = window.requestAnimationFrame(animate);
  };

  useEffect(
    () => {
      animation.id = window.requestAnimationFrame(animate);
      return () => window.cancelAnimationFrame(animation.id);
    },
    [animation]
  );

  const layers = [
    new TripsLayer({
      id: 'trips',
      data: trips,
      getPath: d => d.path,
      getTimestamps: d => d.timestamps,
      getColor: d => (d.vendor === 0 ? theme.trailColor0 : theme.trailColor1),
      opacity: 0.3,
      widthMinPixels: 2,
      rounded: true,
      trailLength,
      currentTime: time,
      shadowEnabled: false
    })
  ];


    return (
        <div className="Background">
            <DeckGL 
                layers={layers}
                effects={theme.effects}
                initialViewState={initialViewState}
                controller={false}
                width={"100%"} height={"calc(100% - 6em - 0.5em"}
                style={{top:"10vh !important;"}}
            >
            <StaticMap mapboxApiAccessToken={"pk.eyJ1IjoiYXJ5YW5vdmFsZWthciIsImEiOiJja3Q2Y2x3MTkwaDFnMnZxd3BveWVzdXhsIn0.Gr0SAUNzUTyyLcFEOUIXew"} mapStyle={mapStyle} />
            <div className="deskgl-herowrapper" style={{cursor:"default"}}>
              <div className="deskgl-hero">
                <h1 className="deskgl-title">NaviTask</h1>
                <p className="deskgl-desc">A faster way of moving.</p>
                <Link to="/errands" className="deskgl-button">Begin </Link>
              </div>
            </div>          
          </DeckGL>
        </div>
    )
}

export default Background
