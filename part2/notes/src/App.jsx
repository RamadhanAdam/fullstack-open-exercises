import { useState, useEffect } from 'react';
import Note from './components/Notes';
import noteService from './services/notes';

const Footer = () =>{
  return(
    <div className='footer'>
      <br />
      <em>Note app, Department of Computer Sciences, Almeida University 2025</em>
    </div>
  )
}
const Notification = ({ message }) => {
  if (message === null) {
    return null
  }
  return (
    <div className='error'>
      {message}
    </div>
  )
}

const App = () => {
  const [notes, setNotes] = useState([]); // State to store notes
  const [newNote, setNewNote] = useState('a new note ...'); // State for the new note input field
  const [showAll, setShowAll] = useState(true); // State to toggle between showing all notes and only important ones
  const [errorMessage, setErrorMessage] = useState('some error happened...')

  useEffect(() => {
    noteService
      .getAll()
      .then(initialNotes => setNotes(initialNotes));
  }, []);

  const addNote = (event) => {
    event.preventDefault();
    const noteObject = {
      content: newNote,
      important: Math.random() > 0.5,
    };

    noteService
      .create(noteObject)
      .then(returnedNote => {
        setNotes(notes.concat(returnedNote));
        setNewNote('');
      });
  };

  const toggleImportanceOf = (id) => {
    const note = notes.find(n => n.id === id);
    const changedNote = { ...note, important: !note.important };

    noteService
      .update(id, changedNote)
      .then(returnedNote => {
        setNotes(notes.map(n => n.id === id ? returnedNote : n));
      })
      .catch((error)=> {
        setErrorMessage(
          `Note '${note.content}' was already deleted from the server`
        )
        setTimeout(()=>{
          setErrorMessage(null)
        },5000)
        setNotes(notes.filter(n => n.id !== id));
      });
  };

  const handleNewNote = (event) => {
    setNewNote(event.target.value);
  };

  const notesToShow = showAll
    ? notes
    : notes.filter(note => note.important);

  return (
    <div>
      <h1>Notes</h1>
      <Notification message ={errorMessage}/>
      <div>
        <button onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'important' : 'all'}
        </button>
      </div>

      <ul>
        {notesToShow.map(note => (
          <Note
            key={note.id}
            note={note}
            toggleImportance={() => toggleImportanceOf(note.id)}
          />
        ))}
      </ul>

      <form onSubmit={addNote}>
        <input value={newNote} onChange={handleNewNote} />
        <button type='submit'>save</button>
      </form>
      <Footer />
    </div>
  );
};

export default App;