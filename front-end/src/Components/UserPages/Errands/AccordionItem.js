import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios'

import '../UserPagesStyles/Errands.css'

const AccordionItem = ({ title, location, time, type, content }) => {
    const [isActive, setIsActive] = useState(false);
    // let contentByType ={
    //     switch(type){
    //         case 'notes':
    //             return(<div className="accordion-notes"><p>{content}</p></div>);
    //          default: 
    //          return 'black';
    //     }
    // };
    
    let contentList = (param) => {
        const list = param.map((line, i) =>
            <li key={i}>
                <label class="container"> 
                    <span>{line}</span> 
                    <input type="checkbox" checked="checked" />
                    <span class="checkmark"></span>
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
            return(<div className="accordion-notes"><p>{content}</p></div>);
            case 'list':
            return(
                <div className="accordion-notes">{contentList(content)}</div>
                );
            default: 
            return 'black';
        }
    };

    return (
        <div className="accordion-item">
            <div className="accordion-prev" onClick={() => setIsActive(!isActive)}>
                <div className="accordion-left">
                    <div className="accordion-title"><span>{title}</span></div>
                    <div className="accordion-location"><span>{location}</span></div>
                </div>
                <div className="accordion-button"><span>{ time } Min Total</span></div>
            </div>
            {isActive && <div className="accordion-content" >
                <p>{contentSwitch(type)}</p>
            </div>}
        </div>
    )
}

export default AccordionItem