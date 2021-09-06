import React from 'react';
import NotesAdder from './Adder_Helpers/NotesAdder';
import CheckListAdder from './Adder_Helpers/CheckListAdder';

import {useState, useEffect} from 'react'

const AddErrand = () => {
    const [titleType, setTitleType] = useState("");
    const [addressType, setAddressType] = useState("");
    const [dropdownType, setDropdownType] = useState("Notes");
    const [notesType, setNotesType] = useState("");
    const [checkListType, setCheckListType] = useState([]);

    const submit_function = (e) => {
        e.preventDefault();
        
    }

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
                        <h3 className = "temp1">Selection Menu</h3>
                        <p className = "temp2">Is this location the start of your trip, end of your trip, or an errand you are doing in between?</p>
                        <select>
                            <option></option>
                            <option></option>
                        </select>
                        <button onClick = {submit_function} className = "errand_adder_form_button" type = "submit">Submit</button>
                    </div>
                    <div className = "errand_adder_form_right">
                        <h3 className = "temp1">Choose Type of Notes</h3>
                        <select value = {dropdownType} onChange = {(event) => setDropdownType(event.target.value)}>
                            <option value = "Notes">Notes</option>
                            <option value = "Checklist">Checklist</option>
                        </select>
                        {dropdownType === "Notes" ? 
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
