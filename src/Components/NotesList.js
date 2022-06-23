import React from "react";
import Note from "./Note"
import AddNote from "./AddNote"

export default function NotesList(props) {
    const mappedNotes = props.notes.map((note)=> <Note id={note.id} text={note.text} date={note.date} handleDeleteNote={props.handleDeleteNote}/>)
    return (
        <>
            <div className="note-list">
                {mappedNotes}   
                <AddNote handleAddNote={props.handleAddNote}  />
            </div>
        </>
    );
}
