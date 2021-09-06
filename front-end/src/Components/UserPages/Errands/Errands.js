import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios'
import FlipMove from 'react-flip-move';
import React, {forwardRef} from 'react';
import '../UserPagesStyles/Errands.css'
import AccordionItem from './AccordionItem';
import AllData from "../../../db.json";
import AddErrand from './AddErrand.js'

const Errands = () => {
    const [isActive, setIsActive] = useState(false);
    const clientID = 0 //placeholder for login / client id
    const [contentArray, modifyContentArray] = useState([]) // change 0 to client id
    const [showAddPage, modifyShowAddPage] = useState(false);
    const [visible, modifyVisible] = useState("errands_container_overlay_invisible");
    const [idCounter, modifyidCounter] = useState(0);
    const [newErrandObject, modifyNewErrandObject] = useState([]);
    const [runID, modifyRunID] = useState("");

    // console.log("Obama");
    // modifyContentArray(AllData.run);
    // console.log(AllData.run);
    // console.log(AllData);
    // console.log(contentArray);
    
    let history = useHistory();

    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            history.push("/login")
        }
        console.log("Hello Snake");

        axios.post("http://localhost:3001/runID", {
            _id: userToken//user token stored in localstorage
        })
        .then(response => {
            console.log(response.data)//response.data is what we use
            modifyContentArray(response.data.run);
            modifyRunID(response.data._id);
        });

    }, []);

    const showAddComponent = () => {
        modifyShowAddPage(true);
        modifyVisible("errands_container_overlay_visible");
    }

    return (
        <div>
            <div className = "errands_container">
                <div className = "errands_container_inner">
                    <h1 className = "Title" >Errands</h1>
                    <div className="errands__wrapper">
                        <FlipMove>
                            {contentArray.map(errand => (
                                <AccordionItem key = {errand.id} title={errand.title} location={errand.address} time={errand.user_time} type={errand.type} content={errand.content}/>
                                // <FunctionalArticle key = {errand.id} title = {errand.title}/>
                            ))}
                        </FlipMove>
                    </div>
                    <div className = "errands-modify-container">
                        <a onClick = {showAddComponent} className = "errand-modify-link">Add an Errand</a>
                        <a className = "errand-modify-link">Delete an Errand</a>
                    </div>
                </div>
                <div className = {visible}>
                </div>
                <div className = "adder_1">
                    <div className = "errands_container_overlay_add_outer">
                        <div className = "errands_container_overlay_add_inner">
                            {showAddPage ? <AddErrand modifyShowAddPage = {modifyShowAddPage} contentArray = {contentArray} modifyContentArray = {modifyContentArray} modifyVisible = {modifyVisible} runID = {runID}/> : <div></div>}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Errands
