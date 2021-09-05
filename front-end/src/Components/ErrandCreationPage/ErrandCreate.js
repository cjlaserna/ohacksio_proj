import React from 'react'

const ErrandCreate = () => {
    
    const formSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }
    
    return (
        <div>
            <h1>Add an Errand</h1>
            <form onSubmit={formSubmit}>

            </form>
        </div>
    )
}

export default ErrandCreate