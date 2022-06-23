import React from "react"

export default function Header(props) {
    const toggleMode = () => {
        props.handleDarkMode(prevMode => !prevMode)
    }
    return (
        <>
        <div className="nav">
            <h1>Notes</h1>
            <button onClick={toggleMode} className="nav-btn">Toggle Mode</button>
        </div>
        </>
    )
}