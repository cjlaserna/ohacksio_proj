import React from 'react'
import './errand.css'

import { useEffect } from "react"
import { useHistory } from "react-router";



const Errand = () => {
    
    let history = useHistory();
    useEffect(() => {
        const userToken = window.localStorage.getItem("token")
        if (userToken == null) {
            history.push("/login")
        }
    }, [])


    return (
        <div className = "errand-container">
            <div className = "errand-container-inner">
                <div className = "errand-title-time-container">
                    <h1 className = "errand-title">Costco</h1>
                    <p className = "errand-time">25 min</p>
                </div>
                <p className = "errand-address">4 Elm Street, Edison, NJ</p>
            </div>
        </div>
    )
}

export default Errand