import React, { useState } from 'react'

const ErrandCreate = () => {
    
    const formSubmit = (event) => {
        event.preventDefault();
        console.log("submit")
    }
    
    const [name, setName] = useState("");

    return (
        <div>
            <h1>Add an Errand</h1>
            <form onSubmit={formSubmit}>
                <div>
                    <label>Name: </label>
                    <input type='input' placeholder = 'Errand Name' value={name} onChange={(e) => setName(e.target.value)}/>
                </div>

                <input type = 'submit' value =  'Create Errand'/>
            </form>
        </div>
    )
}

export default ErrandCreate