import { createSlice } from "@reduxjs/toolkit";

const initialState = [];

const noteSlice = createSlice({
  name: 'notes',
  initialState,
  reducers: {
    addNote: (state, action) => {
      state.unshift(action.payload);
      alert("Your note has been added");
    },
    editNote: (state, action) => {
      const { id, title, content } = action.payload;
      const existingNote = state.find(note => note.id === id);
      if(existingNote) {
        existingNote.title = title;
        existingNote.content = content;
        alert("Your note has been update");
      }
    },
    deleteNote: (state, action) => {
      const { id } = action.payload;
      const existingNote = state.find(note => note.id === id);
      if(existingNote) {
        alert("Your note has been deleted");
        return state.filter(note => note.id !== id);
      }
    }
  }
});

export const { addNote, editNote, deleteNote } = noteSlice.actions;
export default noteSlice.reducer;