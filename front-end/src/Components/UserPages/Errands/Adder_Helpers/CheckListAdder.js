import React from 'react'
import {useState, useEffect} from 'react'
import NotesAdder from './NotesAdder';

const CheckListAdder = ({checkListType, setCheckListType}) => {
    const [tempItem, setTempItem] = useState("");

    const handleClick1 = (e) => {
        e.preventDefault();
        setCheckListType([...checkListType, tempItem]);
        console.log([...checkListType, tempItem]);
        setTempItem("");
    }
    
    return (
        <div className = "temp4">
            <div className = "temp5">
                <input onChange = {(event) => setTempItem(event.target.value)} className = "temp6"></input>
                <button onClick = {handleClick1} className = "temp7">Add Item</button>
            </div>
            <div className = "temp8">
                {checkListType.map((item, i) => 
                    <p className = "temp9">{i + 1}. {item}</p>
                )}
            </div>
        </div>
    )
}

export default CheckListAdder
