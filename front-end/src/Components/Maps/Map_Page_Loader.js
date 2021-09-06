import React, { useEffect } from 'react'
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

    return (
        <div>
            <Map_Page dummyData={AllData.current_run} startLoc={{title: "STARTcostco", address: "9 Matthew CT, Edison, NJ ", user_time: 30, type: "list", content: ["Cook", "Clean"]}} endLoc = {{title: "ENDcostco", address: "855 Grove Ave, Edison, NJ 08820", user_time: 65, type: "note", content: "adwihahwjdhjiadkjhadkjhawhkj"}}/>
        </div>
    )
}

export default Map_Page_Loader
