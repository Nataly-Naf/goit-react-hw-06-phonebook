import { createSlice } from "@reduxjs/toolkit";

import { createSlice } from '@reduxjs/toolkit';

const filterSlice = createSlice({
  name: 'filter',
  initialState: {
       filter: '',
  },
  reducers: {
    filterContact: {
          reducer(state, action) {
                          console.log(state.contacts)
       state.contacts=state.contacts.filter(contact => contact.id !== action.payload) },

      },
      addContact: {
          reducer(state, action) {
              console.log(state.contacts)
              state.contacts.push(action.payload)
            //   state.contacts=state.contacts.push(action.payload)
          }
      }
    },
  });
export const contactsReducer = contactsSlice.reducer;
export const {deleteContact, addContact}  = contactsSlice.actions;


