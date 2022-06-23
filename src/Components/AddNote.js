import React from "react"

export default function AddNote(props) {
    const [noteText, setNoteText] = React.useState('');
    const characterLimit = 200;

    const handleChange = (Event) => {
        if (Event.target.value.length < 201){
            setNoteText(Event.target.value)
        }
    };

    const handleClickSave = () => {
        if (noteText.trim().length > 0) {
            props.handleAddNote(noteText);
            setNoteText("");
        }
    }

    return (    
        <>
        <div className="note new">
            < textarea className="note-textarea" value={noteText} onChange={handleChange} cols="10" rows="8" placeholder="Enter your note..." />
            <footer className="note-footer">
                <small className="remaining-char">{characterLimit - noteText.length} remaining</small>
                <button className="note-save" onClick={handleClickSave}>Save</button>
            </footer>
        </div>
        </>
    );
} 