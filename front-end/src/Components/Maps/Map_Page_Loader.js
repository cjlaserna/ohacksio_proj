import React, { useState, useEffect } from 'react'
import AllData from "../../db.json";
import Map_Page from './Map_Page';
import axios from 'axios'

const Map_Page_Loader = () => {
    const userIDtoRunObject = (event) =>{
        const userToken = window.localStorage.getItem("token")
        axios.post("http://localhost:3001/runID", {
            _id: userToken
        })
        .then(response => {
            
            //console.log(serverMapData)
        });
    };
    
    useEffect(() => {
        console.log("run")
    }, [])

    const sortArray = () => {
        
    }

    const [origin, setOrigin] = useState({title: "STARTcostco", address: "9 Matthew CT, Edison, NJ ", user_time: 30, type: "list", content: ["Cook", "Clean"]})
    const [endpt, setEndpt] = useState({title: "ENDcostco", address: "855 Grove Ave, Edison, NJ 08820", user_time: 65, type: "note", content: "adwihahwjdhjiadkjhadkjhawhkj"})
    
    return (
        <div>
            <Map_Page dummyData={AllData.current_run} startLoc={origin} endLoc = {endpt}/>
        </div>
    )
}

export default Map_Page_Loader
