import React from 'react'
import '../../UserPagesStyles/Errands.css'

const NotesAdder = ({notesType, setNotesType}) => {
    return (
        <div>
            <textarea onChange = {(event) => setNotesType(event.target.value)}className = "temp3"></textarea>
        </div>
    )
}

export default NotesAdder
