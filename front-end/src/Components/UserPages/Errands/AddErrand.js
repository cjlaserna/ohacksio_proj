import React from 'react';
import NotesAdder from './Adder_Helpers/NotesAdder';
import CheckListAdder from './Adder_Helpers/CheckListAdder';
import axios from 'axios';

import {useState, useEffect} from 'react'

const AddErrand = ({modifyShowAddPage, contentArray, modifyContentArray, modifyVisible, runID}) => {

    const [titleType, setTitleType] = useState("");
    const [addressType, setAddressType] = useState("");
    const [estimatedTime, setEstimatedTime] = useState();
    const [dropdownType, setDropdownType] = useState("notes");
    const [destinationType, setDestinationType] = useState("");
    const [notesType, setNotesType] = useState("");
    const [checkListType, setCheckListType] = useState([]);

    const [options, setOptions] = useState([]);

    const submit_function = (e) => {
        e.preventDefault();
        
        let temp_object = {
            "title": titleType,
            "address": addressType,
            "user_time": estimatedTime,
            "type": dropdownType,
            "id": Math.floor(Math.random() * 1000000),
            "destination_type": destinationType
        }

        if (dropdownType === "notes") {
            temp_object.content = notesType;
        }
        if (dropdownType === "list") {
            temp_object.content = checkListType;
        }

        let temp_1 = [...contentArray, temp_object];

        modifyContentArray(temp_1);

        const userToken = window.localStorage.getItem("token")

        axios.post("http://localhost:3001/update", {
            _id: runID, 
            run: temp_1,
        })


        modifyVisible("errands_container_overlay_invisible")
        modifyShowAddPage(false);
    }

    useEffect(() => {
        let options_temp = ["start", "end", "errand"];
        console.log("snake");
        console.log(contentArray);

        for(let i = 0; i < options_temp.length; i++) {
            console.log(contentArray[i]);
            console.log("Bruh");
            console.log(contentArray.destination_type);
            if (contentArray[i].destination_type === "start") {
                options_temp.splice(0, 1);
            }
            if (contentArray[i].destination_type === "end") {
                options_temp.splice(1, 1);
            }
        }

        console.log(options_temp);

        setOptions(options_temp);
    }, [contentArray]);
    // const destination_type_finder = () => {

    // }

    return (
        <div className = "add_errand_container">
            <div className = "add_errand_container_inner">
                <h1 className = "adder_2">Add An Errand</h1>
                <form className = "errand_adder_form">
                    <div className = "errand_adder_form_left">
                        <h3 className = "temp1">Type Errand Name Below</h3>
                        <input onChange = {(event) => setTitleType(event.target.value)} placeholder = "Grocery Shopping at Walmart..." className = "errand_adder_input"></input>
                        <h3 className = "temp1">Type Address Below</h3>
                        <input onChange = {(event) => setAddressType(event.target.value)}placeholder = "19 Alexis Lane, Edison, NJ..." className = "errand_adder_input"></input>
                        <h3 className = "temp1">Estimated Time for Errand (Min)</h3>
                        <input onChange = {(event) => setEstimatedTime(event.target.value)} placeholder = "25" className = "errand_adder_input"></input>
                        <h3 className = "temp1">Selection Menu</h3>
                        <p className = "temp2">Is this location the start of your trip, end of your trip, or an errand you are doing in between?</p>
                        <select value = {destinationType} onChange = {(event) => setDestinationType(event.target.value)}>
                            {options.map((destination_type => <option value = {destination_type}>{destination_type}</option>))}
                        </select>
                        <button onClick = {submit_function} className = "errand_adder_form_button" type = "submit">Submit</button>
                    </div>
                    <div className = "errand_adder_form_right">
                        <h3 className = "temp1">Choose Type of Notes</h3>
                        <select value = {dropdownType} onChange = {(event) => setDropdownType(event.target.value)}>
                            <option value = "notes">Notes</option>
                            <option value = "list">Checklist</option>
                        </select>
                        {dropdownType === "notes" ? 
                            <NotesAdder notesType = {notesType} setNotesType = {setNotesType}/> : 
                            <CheckListAdder checkListType = {checkListType} setCheckListType = {setCheckListType}/> 
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddErrand
