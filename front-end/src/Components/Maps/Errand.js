import React from 'react'
import './errand.css'
import PropTypes from 'prop-types'

const Errand = ( props ) => {


    return (
        <div className = "errand-container">
            <div className = "errand-container-inner">
                <div className = "errand-title-time-container">
                    <div className = "errand-title">{props.erName}</div>
                    <p className = "errand-time">{props.erDuration} Minutes</p>
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