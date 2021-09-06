import React from 'react'
import './errand.css'
import { useEffect } from "react"
import { useHistory } from "react-router";
import PropTypes from 'prop-types'


const Errand = ( props ) => {
    
    let history = useHistory();
    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            //history.push("/login")
        }
    }, [])


    return (
        <div className = "errand-container">
            <div className = "errand-container-inner">
                <div className = "errand-title-time-container">
                    <div className = "errand-title">{props.erName}</div>
                    <p className = "errand-time">{props.erDuration}</p>
                </div>
                <p className = "errand-address">{props.erAddress}</p>
            </div>
        </div>
    )
}

Errand.defaultProps = {
    erName: 'Default Title',
    erDuration: 'X Hours X Minues',
    erAddress: 'X Random Street Name',
}

Errand.propTypes = {
    erName: PropTypes.string,
    erDuration: PropTypes.string,
    erAddress: PropTypes.string,
}

export default Errand