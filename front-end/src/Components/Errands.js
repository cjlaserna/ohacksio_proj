import { useState, useEffect } from 'react';
import { useLocation, useHistory } from "react-router-dom";
import axios from 'axios'

import './UserPages/UserPagesStyles/Errands.css'
import AccordionItem from './UserPages/Errands/AccordionItem';
import AllData from "../db.json";


const clientID = 0 //placeholder for login / client id
const contentArray = AllData.clients[0] // change 0 to client id

const content = contentArray.current_run.map((errand, i) => {
    return(
    <div className="accordion" key={i}>
        <AccordionItem title={errand.title} location={errand.address} time={errand.user_time} type={errand.type} content={errand.content}/>
    </div>
    );
});

console.log("content" + content);

const Errands = () => {
    const [isActive, setIsActive] = useState(false);
    return (
        <div className="errands__wrapper">
            <h1 className = "Title" >Errands</h1>
            {content}
        </div>
    )
}

export default Errands
