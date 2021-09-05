import React from 'react'
import './map_page.css'
import Map from './Map.js'
import Errand from './Errand.js'
import Errand_Time from './Errand_Time.js'

const Map_Page = () => {
    return (
        <div className = "mappage_fullview">
            <div className = "mappage_left">
                <div className = "mappage_left_inner">
                    <h1 className = "mappage_title">Errands</h1>
                    <Errand />
                    <Errand_Time />
                    <Errand />
                    <Errand_Time />
                    <Errand />
                    <Errand_Time />
                    <Errand />
                    <Errand_Time />
                    <Errand />

                </div>
            </div>
            <div className = "mappage_right">
                <Map />
            </div>
        </div>
    )
}

export default Map_Page
