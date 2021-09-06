import React from 'react'

const AddErrand = () => {
    const [dropdownType, setDropdownType] = useState("Notes");

    return (
        <div className = "add_errand_container">
            <div className = "add_errand_container_inner">
                <h1 className = "adder_2">Add An Errand</h1>
                <form className = "errand_adder_form">
                    <div className = "errand_adder_form_left">
                        <h3>Type Errand Name Below</h3>
                        <input placeholder = "Grocery Shopping at Walmart..." className = "errand_adder_input"></input>
                        <h3>Type Address Below</h3>
                        <input placeholder = "19 Alexis Lane, Edison, NJ..." className = "errand_adder_input"></input>
                        <button className = "errand_adder_form_button" type = "submit">Submit</button>
                    </div>
                    <div className = "errand_adder_form_right">
                        <h3>Choose Type of Notes</h3>
                        <select>
                            <option value = "Notes">Notes</option>
                            <option value = "Checklist">Checklist</option>
                        </select>
                        {dropDownTye === "Notes" ? 
                            <div>
                                
                            </div>
                        }
                    </div>
                </form>
            </div>
        </div>
    )
}

export default AddErrand
