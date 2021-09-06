import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios'
import React, {forwardRef} from 'react'
import FlipMove from 'react-flip-move'

import '../UserPagesStyles/Errands.css'

const AccordionItem = forwardRef((props, ref) => {
    const [isActive, setIsActive] = useState(false);
    
    let contentList = (param) => {
        const list = param.map((line, i) =>
            <li className = "accordion-list-item" key={i}>
                <label className="container"> 
                    <input type="checkbox"/>
                    <span>{line}</span> 
                    <span className="checkmark"></span>
                </label>
            </li>
        )
        return(
            list
        );
    }
    
    let contentSwitch = (param) => {
        switch(param) {
            case 'notes':
            return(<div className="accordion-notes"><p>{props.content}</p></div>);
            case 'list':
            return(
                <div className="accordion-notes">{contentList(props.content)}</div>
                );
            default: 
            return 'black';
        }
    };

    return (
        <div ref = {ref} className = "accordion">
            <div className="accordion-item">
                <div className="accordion-prev" onClick={() => setIsActive(!isActive)}>
                    <div className="accordion-left">
                        <div className="accordion-title"><span>{props.title}</span></div>
                        <div className="accordion-location"><span>{props.location}</span></div>
                    </div>
                    <div className="accordion-button"><span>{ props.time } Min Total</span></div>
                </div>
                {isActive ? <div className="accordion-content" >
                    <hr></hr>
                    <p className = "accordian-misc-1">Notes and Information:</p>
                    <p>{contentSwitch(props.type)}</p>
                </div> : <div></div>}
            </div>
        </div>
    )
});

export default AccordionItem