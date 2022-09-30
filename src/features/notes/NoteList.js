import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Button from "../../components/Button";
import { deleteNote } from "./noteSlice";

const NoteList = () => {
  const dispatch = useDispatch();
  const notes = useSelector(store => store.notes);

  const handleRemoveNote = (id) => {
    dispatch(deleteNote({ id }));
  }

  const renderCard = () => notes.map(note => (
    <div className="cardParents d-flex" key={note.id}>
      <div>
        <h3 className="nameNote fw-bold">{note.title}</h3>
        <p className="note">{note.content}</p>
      </div>
      <div className="iconParents d-flex">
        <Link to={`edit-note/${note.id}`}>
          <button>
            <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
          </button>
        </Link>
        <button
          onClick={() => handleRemoveNote(note.id)}
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="icon" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
          </svg>
        </button>
      </div>
    </div>
  ))

  return (
    <div>
      <Link to="/add-note"><Button>Add Note</Button></Link>
      <div className="griding">
        {notes.length ? renderCard() : <p className="gridItems">No Notes</p>}
      </div>
    </div>
  )
}

export default NoteList