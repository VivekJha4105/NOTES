import React from "react"
import Header from "./Components/Header"
import Search from "./Components/Search"
import NoteList from "./Components/NotesList"
import { nanoid } from "nanoid"

function App() {
  const [darkMode, setDarkMode] = React.useState(false);
  const [notes, setNotes] = React.useState([
    {
      id: nanoid(),
      text: "DEMO: Text goes here.",
      date: "DEMO: Date goes here"
    }
  ])

  React.useEffect(() => {
    const savedNotes = JSON.parse(localStorage.getItem('notes-data'))

    if (savedNotes) {
      setNotes(savedNotes)
    }
  }, [])

  React.useEffect(() => {
    localStorage.setItem('notes-data', JSON.stringify(notes));
  }, [notes])

  /* Here, we have included the STATE variable searchText in the App component because it is directly related to 
      the Notes component's rendering based on the object member 'text' */
  const [searchText, setSearchText] = React.useState('');

  const addNote = (text) => {
    const date = new Date();
    const newNote = {
      id: nanoid(),
      text: text,
      date: date.toLocaleDateString()
    }
    setNotes(prevNotes => [...notes, newNote]);
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id))
  }

  return (
    <div className={` ${darkMode ? 'dark-mode' : 'none' }`}>
      <div className="container">
        <Header handleDarkMode={setDarkMode} />
        <Search 
          handleSearchText={setSearchText} 
        />
        <NoteList 
          notes={
            notes.filter((note) => note.text.toLowerCase().includes(searchText))
          } 
          handleAddNote={addNote} handleDeleteNote={deleteNote} 
        />
      </div>
    </div>
  );
}

export default App;
