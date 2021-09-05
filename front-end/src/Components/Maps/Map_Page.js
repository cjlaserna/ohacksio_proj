import React from 'react'
import './map_page.css'
import GoogleMap from './GoogleMap.js'
import Errand from './Errand.js'
import Errand_Time from './Errand_Time.js'

const Map_Page = () => {

    const registerUser = (event) =>{
        event.preventDefault();
        axios.post("http://localhost:3001/insert", {
            createdBy: ,//PUT CREATEDBY VARIABLE
            run: //PUT RUN OBJECT
        })
        .then(response => {
        });
    };

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

                </div>
            </div>
            <div className = "mappage_right">
                <GoogleMap />
            </div>
        </div>
    )
}

export default Map_Page
