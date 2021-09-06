import React from 'react'
import './map_page.css'
import GoogleMap from './GoogleMap.js'
import Errand from './Errand.js'
import Errand_Time from './Errand_Time.js'
import { useEffect } from "react"
import { useHistory } from "react-router";



const Map_Page = () => {
    let history = useHistory();
    
    // const userIDtoRunObject = (event) =>{
    //     event.preventDefault();
    //     axios.post("http://localhost:3001/runID", {
    //         _id: //put user id
    //     })
    //     .then(response => {
    //         //response is run object
    //     });
    // };

    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            history.push("/login")
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

                </div>
            </div>
            <div className = "mappage_right">
                <GoogleMap />
            </div>
        </div>
    )
}

export default Map_Page
