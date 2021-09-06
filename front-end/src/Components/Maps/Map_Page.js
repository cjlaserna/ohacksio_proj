import React from 'react'
import './map_page.css'
import GoogleMaps from './GoogleMap.js'
import Errand from './Errand.js'
import Errand_Time from './Errand_Time.js'
import { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Circle, Marker } from '@react-google-maps/api';
import axios from 'axios'

const key = "AIzaSyCj_1kmVhtPyMCGU9VO_QZ6JtpQ5fnP_X8"

const Map_Page = () => {
    let history = useHistory();
    const [serverMapData, setServerMapData] = useState()
    
    const userIDtoRunObject = (event) =>{
        event.preventDefault();
        const userToken = window.localStorage.getItem("token")
        axios.post("http://localhost:3001/runID", {
            _id: userToken
        })
        .then(response => {
            setServerMapData(response)
            console.log(serverMapData)
        });
    };

    const startLoc = {title: "STARTcostco", location: "9 matthew ct edison nj", duration: "30 mins"}
    const endLoc = {title: "ENDcostco", location: "jps high school", duration: "30 mins"}
    const dummyData = [
        {title: "costco", location: "205 Vineyard Rd, Edison, NJ 08817", duration: "30 mins"},
        {title: "walmart", location: "2220 NJ-27, Edison, NJ 08817", duration: "15 mins"},
        {title: "costco", location: "100 Vineyard Rd, Edison, NJ 08817", duration: "30 mins"},
        {title: "costco", location: "305 Vineyard Rd, Edison, NJ 08817", duration: "30 mins"},
        {title: "costco", location: "405 Vineyard Rd, Edison, NJ 08817", duration: "30 mins"},
        {title: "costco", location: "50 Vineyard Rd, Edison, NJ 08817", duration: "30 mins"}
    ]

    const [org, setOrg] = useState("")
    const [dest, setDest] = useState("")
    const [tmode, setTmode] = useState("DRIVING")
    const [waypoints, setwaypoints] = useState([])
    const waypts = () =>{
        dummyData.map((errand) => 
            waypoints.push({location: errand.location, stopover: true})
            
        )
        setOrg(startLoc.location)
        setDest(endLoc.location)
        return waypoints;
    }

  const [mapData, setMapData] = useState({routes: [{legs: [{duration: {text: "Duration Not Loaded"}},{duration: {text: "Duration Not Loaded"}},]}]})
  const [checker, setChecker] = useState(0)
  const directionsCallback = (response) => {
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
        console.log(userIDtoRunObject)
        if (userToken == null) {
            //history.push("/login")
        }
        console.log(waypts())
    }, [])

    return (
        <div className = "mappage_fullview">
            <div className = "mappage_left">
                <div className = "mappage_left_inner">
                    <h1 className = "mappage_title">Errands</h1>
                    
                    <Errand erName={startLoc.title} erDuration={startLoc.duration} erAddress={startLoc.location}/>
                    <Errand_Time time={mapData.routes[0].legs[0].duration.text}/>
                    {dummyData.map((errand, index) => 
                        <>
                        <Errand erName={errand.title} erDuration={errand.duration} erAddress={errand.location}/>
                        <Errand_Time onLoad = {append()} time={mapData.routes[0].legs[index+1].duration.text}/>
                        </>
                    )}
                    <Errand erName={endLoc.title} erDuration={endLoc.duration} erAddress={endLoc.location}/>
                    <Errand_Time time={""}/>

                </div>
            </div>
            <div className = "mappage_right">
                <GoogleMaps mapInfo={mapData}/>

                <LoadScript googleMapsApiKey={key}>
                        <DirectionsService options ={{destination: dest, origin: org, waypoints: waypoints, travelMode: tmode, optimizeWaypoints: false}}
                        callback={directionsCallback}/>
                    </LoadScript>
            </div>
        </div>
    )
}

export default Map_Page
