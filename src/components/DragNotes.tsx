import { createRef, useEffect, useRef } from "react";
import Note from "./Note";
import { SingleNote } from "../note-db";

interface DragNotesProps {
  notes: SingleNote[];
  noteSetter: (notesData: SingleNote[]) => void;
}

const DragNotes = ({ notes, noteSetter }: DragNotesProps) => {


  const noteRefs = useRef<{ [key: string]: React.RefObject<HTMLDivElement> }>({});

  useEffect(() => {
    const savedNotesString = localStorage.getItem('notes');
    const savedNotes: SingleNote[] = savedNotesString ? JSON.parse(savedNotesString) : [];

    const updatedNotes = notes.map((note) => {
      const savedNote = savedNotes.find((n) => n.id === note.id);
      if (savedNote) {
        return { ...note, position: savedNote.position };
      } else {
        const position = getNewPositions();
        return { ...note, position };
      }
    });

    noteSetter(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  }, [notes.length, noteSetter]);

  const getNewPositions = () => {
    const maxX = window.innerWidth - 250;
    const maxY = window.innerHeight - 250;

    return {
      x: Math.floor(Math.random() * maxX),
      y: Math.floor(Math.random() * maxY),
    };
  };

  const handleDragging = (data: SingleNote, e: React.MouseEvent<HTMLDivElement>) => {
    const noteRef = noteRefs.current[data.id]?.current;
    if (!noteRef) return;

    const rect = noteRef.getBoundingClientRect();
    const offsetX = e.clientX - rect.left;
    const offsetY = e.clientY - rect.top;

    const handleMouseMove = (e: MouseEvent) => {
      const newX = e.clientX - offsetX;
      const newY = e.clientY - offsetY;

      noteRef.style.left = `${newX}px`;
      noteRef.style.top = `${newY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);

      const finalRect = noteRef.getBoundingClientRect();
      const newPosition = { x: finalRect.left, y: finalRect.top };
      updateNotePosition(data.id, newPosition);
    };

    document.addEventListener('mousemove', handleMouseMove);
    document.addEventListener('mouseup', handleMouseUp);
  };

  const updateNotePosition = (id: string, newPosition: { x: number; y: number }) => {
    const updatedNotes = notes.map((note) =>
      note.id === id ? { ...note, position: newPosition } : note
    );
    noteSetter(updatedNotes);
    localStorage.setItem('notes', JSON.stringify(updatedNotes));
  };

  useEffect(() => {
    console.log('noteRefs', noteRefs);
  }, [notes]);

 

  return (
    <div>
      {/* <h1 className="text-center font-bold text-4xl">Note Draggable</h1> */}

   
  
      <div>
        {notes.map((data) => {
          if (!noteRefs.current[data.id]) {
            noteRefs.current[data.id] = createRef();
          }
          return (
            <Note
              note={data}
              key={data.id}
              ref={noteRefs.current[data.id]}
              onMouseDown={(e) => handleDragging(data, e)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default DragNotes;
