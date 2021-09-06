import React from 'react'
import './errand.css'
import PropTypes from 'prop-types'

const Errand_Time = (props) => {
    return (
        <div className = "travel_time_container">
            <p>{props.time}</p>
        </div>
    )
}

Errand_Time.defaultProps = {
    time: '... 20 minutes ...',
}

Errand_Time.propTypes = {
    time: PropTypes.string,
}

export default Errand_Time