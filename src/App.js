import { Route, Routes } from "react-router-dom";
import AddNote from "./features/notes/AddNote";
import EditNote from "./features/notes/EditNote";
import NoteList from "./features/notes/NoteList";

function App() {
  return (
    <>
      <h1 className="header text-center font-bold py-3">My Notes</h1>
      <div className="container mx-auto px-2 mt-5">
        <Routes>
          <Route path="/" element={<NoteList />} />
          <Route path="/add-note" element={<AddNote />} />
          <Route path="/edit-note/:id" element={<EditNote />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
