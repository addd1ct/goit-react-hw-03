import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
  },
  reducers: {
    addContact: (state, action) => {
      const { name, number } = action.payload;
      state.items.push({ id: nanoid(), name, number });
    },
    deleteContact: (state, action) => {
      const id = action.payload;
      state.items = state.items.filter((contact) => contact.id !== id);
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;
