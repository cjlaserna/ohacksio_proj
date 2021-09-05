import React from 'react'
import './errand.css'

const Errand = () => {
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