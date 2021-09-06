import React from 'react'
import './map_page.css'
import GoogleMaps from './GoogleMap.js'
import Errand from './Errand.js'
import Errand_Time from './Errand_Time.js'
import { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Circle, Marker } from '@react-google-maps/api';
import axios from 'axios'
import AllData from "../../db.json";

const key = "AIzaSyCj_1kmVhtPyMCGU9VO_QZ6JtpQ5fnP_X8"

const Map_Page = ({ dummyData, startLoc, endLoc }) => {
    let history = useHistory();
    const [serverMapData, setServerMapData] = useState("null")

    const userIDtoRunObject = (event) =>{
        const userToken = window.localStorage.getItem("token")
        axios.post("http://localhost:3001/runID", {
            _id: userToken
        })
        .then(response => {
            setServerMapData(response.data);
            console.log(serverMapData)
        });
    };
    const [tmode, setTmode] = useState("DRIVING")
    const [waypoints, setwaypoints] = useState([])
    const waypts = () =>{
        
        dummyData.map((errand) =>
            waypoints.push({location: errand.address, stopover: true})
        )
        console.log(waypoints)
        setChecker(0)
        return waypoints;
    }

  const [mapData, setMapData] = useState({routes: [{legs: [{duration: {text: "Duration Not Loaded"}},{duration: {text: "Duration Not Loaded"}},]}]})
  const [checker, setChecker] = useState(0)
  const directionsCallback = (response) => {
    console.log("callback")
    if (response !== null && response.status === 'OK') {
        if (checker<1){
            setMapData(response)
            setChecker(checker+1)
          }
      }
    }

    const append = () => {
        mapData.routes[0].legs.push({duration: {text: "Duration Not Loaded"}},)
    }

    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            history.push("/login")
        }
       
    }, [])

    useEffect(() => {
        setChecker(0)
    }, [startLoc, endLoc])

    useEffect(() => {
        setChecker(0)
        waypts()
    }, [dummyData])

    return (
        <div className = "mappage_fullview">
            <div className = "mappage_left">
                <div className = "mappage_left_inner">
                    <h1 className = "mappage_title">Errands</h1>
                    <Errand erName={startLoc.title} erDuration={startLoc.user_time} erAddress={startLoc.address} type={startLoc.type} content={startLoc.content}/>
                    <Errand_Time time={mapData.routes[0].legs[0].duration.text}/>
                    {dummyData.map((errand, index) =>
                        <>
                        <Errand erName={errand.title} erDuration={parseInt(errand.user_time)} erAddress={errand.address} type={errand.type} content={errand.content}/>
                        <Errand_Time onLoad = {append()} time={mapData.routes[0].legs[index+1].duration.text}/>
                        </>
                    )}
                    <Errand erName={endLoc.title} erDuration={endLoc.user_time} erAddress={endLoc.address} type={endLoc.type} content={endLoc.content}/>
                    <Errand_Time time={""}/>

                </div>
            </div>
            <div className = "mappage_right">
                <GoogleMaps mapInfo={mapData}/>
                        
                <LoadScript googleMapsApiKey={key}>
                        <DirectionsService options ={{destination: endLoc.address, origin: startLoc.address, waypoints: waypoints, travelMode: tmode, optimizeWaypoints: true}}
                        callback={directionsCallback}/>
                    </LoadScript>
            </div>
        </div>
    )
}

export default Map_Page
