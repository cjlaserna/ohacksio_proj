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
        //sortArray()
       
    }, [])

    const sortArray = () => {
        AllData.run.forEach(element => {
            if(element.destination_type=="start"){
                setOrigin(element)
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

    const [origin, setOrigin] = useState({title: "STARTcostco", address: "855 Grove Ave, Edison, NJ 08820", user_time: 30, type: "list", content: ["Cook", "Clean"]})
    const [endpt, setEndpt] = useState({title: "ENDcostco", address: "855 Grove Ave, Edison, NJ 08820", user_time: 65, type: "note", content: "adwihahwjdhjiadkjhadkjhawhkj"})
    const [finalArray, setFinalArray] = useState(AllData.run)
    const [tempArray, setTempArray] = useState([])

    return (
        <div>
            <Map_Page dummyData={finalArray} startLoc={origin} endLoc = {endpt}/>
        </div>
    )
}

export default Map_Page_Loader
