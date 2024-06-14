import DragNotes from '../components/DragNotes.tsx'
import { useState, useEffect } from 'react'
import {SingleNote} from "../note-db"
import { notesData } from "../note-db.ts"
const AllNotes = () => {
  const [notes, setNotes] = useState<SingleNote[]>(() => {
    const storedNotes = localStorage.getItem('notes');
    return storedNotes ? JSON.parse(storedNotes) : notesData;
  });

  useEffect(() => {
    localStorage.setItem('notes', JSON.stringify(notes));
  }, [notes]);

  return (
    <DragNotes notes={notes} noteSetter={setNotes} />
  );
}

export default AllNotes;
