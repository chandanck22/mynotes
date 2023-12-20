import { useState } from 'react';
import Notes from './components/Notes';

function App() {
  const [notes, setNotes] = useState([]);

  const addNote = () => {
    setNotes([...notes, { id: Date.now(), text: 'New Note' }]);
  };

  const updateNote = (id, newText) => {
    setNotes((preNote) => preNote.map((note) => (note.id === id ? { ...note, text: newText } : note)));
  }

  const deleteNote = (id) => {
    setNotes(notes.filter((note) => note.id !== id));
  }

  return (
    <>
      <h1 className='m-3 ml-5 text-white font-bold text-5xl italic text-center text-blue-500'>My Notes</h1>
      <div className='text-center'>
        <button onClick={addNote} className='text-white bg-green-700 hover:bg-green-800 px-5 py-2.5 me-2 mb-2 dark:bg-green-600 dark:hover:bg-green-700 rounded-lg'>
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" dataSlot="icon" className="w-6 h-6">
            <path strokeLinecap="round" strokeLinejoin="round" d="M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
          </svg>
        </button>
      </div>

      <div className='flex flex-wrap'>
        {notes.map((note) => (
          <Notes key={note.id} id={note.id} text={note.text} onUpdate={updateNote} onDelete={() => deleteNote(note.id)}/>
        ))}
      </div>
    </>
  );
}

export default App;
