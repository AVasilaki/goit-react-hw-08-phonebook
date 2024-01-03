import { createSlice } from '@reduxjs/toolkit';

import { fetchGetContacts, fetchAddContact, fetchDeleteContact } from './operation';

const contactsSlice1 = createSlice({
  name: 'contacts',
  initialState: {
    items: [],
    isLoading: false,
    error: null,
  },
  reducers: {
    contactsClear(state) {
      state.items = [];
    },
  },
  extraReducers: builder => {
    builder

      .addCase(fetchGetContacts.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchGetContacts.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items = action.payload;
      })
      .addCase(fetchGetContacts.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchAddContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchAddContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        state.items.push(action.payload);
      })
      .addCase(fetchAddContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      })
      .addCase(fetchDeleteContact.pending, state => {
        state.isLoading = true;
      })
      .addCase(fetchDeleteContact.fulfilled, (state, action) => {
        state.isLoading = false;
        state.error = null;
        const index = state.items.findIndex(contact => contact.id === action.payload.id);
        state.items.splice(index, 1);
      })
      .addCase(fetchDeleteContact.rejected, (state, action) => {
        state.isLoading = false;
        state.error = action.payload;
      });
  },
});

export const contactsReducer = contactsSlice1.reducer;
export const { contactsClear } = contactsSlice1.actions;
