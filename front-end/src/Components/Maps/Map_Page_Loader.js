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
            
            console.log(response)
        });
    };
    
    useEffect(() => {
        sortArray()
    }, [])

    const sortArray = () => {
        console.log("sorting")
        AllData.run.forEach(element => {
            if(element.destination_type=="start"){
                setOrigin(element)
                console.log(element)
            }
            if(element.destination_type=="end"){
                setEndpt(element)
            }
            if(element.destination_type=="errand"){
                tempArray.push(element)
            }
            setFinalArray(tempArray)
            console.log(finalArray)
        });
    }

    

    const [origin, setOrigin] = useState({title: "START", address: "NJ", user_time: 60, type: "list", content: ["List 1", "List 2"]})
    const [endpt, setEndpt] = useState({title: "ENDcostco", address: "NJ", user_time: 60, type: "note", content: "WORDS"})
    const [finalArray, setFinalArray] = useState([])
    const [tempArray, setTempArray] = useState([])

    return (
        <div>
            
            <Map_Page dummyData={finalArray} startLoc={origin} endLoc = {endpt}/>
        </div>
    )
}

export default Map_Page_Loader
