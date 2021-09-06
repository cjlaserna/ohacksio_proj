import React from 'react'
import './map_page.css'
import GoogleMaps from './GoogleMap.js'
import Errand from './Errand.js'
import Errand_Time from './Errand_Time.js'
import { useState, useEffect } from "react"
import { useHistory } from "react-router";
import { GoogleMap, LoadScript, DirectionsService, DirectionsRenderer, Circle, Marker } from '@react-google-maps/api';

const key = "AIzaSyCj_1kmVhtPyMCGU9VO_QZ6JtpQ5fnP_X8"

const Map_Page = () => {
    let history = useHistory();

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

  const [mapData, setMapData] = useState("bruh")
  const [checker, setChecker] = useState(0)
  const directionsCallback = (response) => {
    if (response !== null && response.status === 'OK') {
        if (checker<1){
            setMapData(response)
            setChecker(checker+1)
          }
      }
    }

    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            //history.push("/login")
        }
    }, [])

    return (
        <div className = "mappage_fullview">
            <div className = "mappage_left">
                <div className = "mappage_left_inner">
                    <h1 className = "mappage_title">Errands</h1>
                    <Errand />
                    <Errand_Time />
                    <Errand />
                    <Errand_Time />
                    <Errand />
                    <Errand_Time />
                    <Errand />
                    
                    <LoadScript googleMapsApiKey={key}>
                        <DirectionsService options ={{destination: dest, origin: org, waypoints: waypoint, travelMode: tmode, optimizeWaypoints: true}}
                        callback={directionsCallback}/>
                    </LoadScript>

                </div>
            </div>
            <div className = "mappage_right">
                <GoogleMaps mapInfo={mapData}/>
            </div>
        </div>
    )
}

export default Map_Page
