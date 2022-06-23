import React from "react"
import { MdDeleteForever } from "react-icons/md"

export default function Note(props){
    return(
        <>
        <div className="note">
            <span>{props.text}</span>
            <div className="note-footer">
                <small>{props.date}</small>
                <MdDeleteForever onClick={()=> props.handleDeleteNote(props.id)} className="delete-icon" size="1.3em"/>
            </div>
        </div>
        </>
    )
}