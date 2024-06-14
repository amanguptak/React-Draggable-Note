import { useEffect, forwardRef } from "react";
import { SingleNote } from "../note-db";

interface INoteProps {
  note: SingleNote;

  onMouseDown: (e: React.MouseEvent<HTMLDivElement>) => void;
}

const Note = forwardRef<HTMLDivElement, INoteProps>(({ note ,onMouseDown}, ref) => {
  useEffect(() => {
    console.log(note);
  }, [note]);

  return (
    <div
      ref={ref}
      onMouseDown={onMouseDown}
      className="absolute shadow-xl bg-amber-200 p-4 rounded m-2 text-start w-60 cursor-grab select-none"
      style={{ left: `${note.position?.x}px`, top: `${note.position?.y}px` }}
    >
      <h2 className="text-xl font-semibold text-slate-950">
        📌 {note.id}: {note.title}
      </h2>
      <p className="text-md text-slate-800">{note.content}</p>
    </div>
  );
});

export default Note;
