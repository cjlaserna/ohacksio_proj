import { useState, useEffect, forwardRef } from 'react';
import React from 'react'
import './errand.css'
import PropTypes from 'prop-types'

const Errand = forwardRef( (props,ref ) => {
    const[isActive, setIsActive] = useState(false);

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
            case'list':
            return( <div className="accordion-notes">{contentList(props.content)}</div> );
            default:
            return 'none';
        }
    }

    return (
        <div ref={ref} className = "errand-container    ">
            <div style={{cursor: "pointer"}} className = "errand-container-inner" onClick={() => setIsActive(!isActive)}>
                <div className = "errand-title-time-container">
                    <div className = "errand-title">{props.erName}</div>
                    <p className = "errand-time">{props.erDuration} Minutes</p>
                </div>
                <p className = "errand-address">{props.erAddress}</p>
                {isActive ? <div className="accordion-content" >
                    <hr></hr>
                    <p className = "accordian-misc-1">Notes and Information:</p>
                    <p>{contentSwitch(props.type)}</p>
                </div> : <div></div>}
            </div>
        </div>
    )
});

Errand.defaultProps = {
    erName: 'Default Title',
    erDuration: 'X Hours X Minues',
    erAddress: 'X Random Street Name',
    type: 'note',
    content: '',
}

Errand.propTypes = {
    erName: PropTypes.string,
    erDuration: PropTypes.number,
    erAddress: PropTypes.string,
    type: PropTypes.string,
}

export default Errand