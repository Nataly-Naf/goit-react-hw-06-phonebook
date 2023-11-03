import { createSlice } from '@reduxjs/toolkit';

const contactsSlice = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
      { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
      { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
      ],
      filter: '',
  },
  reducers: {
    deleteContact: {
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
      },
      filterContact: {
          reducer(state, action) {
              console.log('jhdjfghdkj')
               state.contacts=state.contacts.filter(contact => contact.name.toLowerCase().includes(action.payload.toLowerCase()) )
              

          }
      }
    },
  });
export const contactsReducer = contactsSlice.reducer;
export const {deleteContact, addContact, filterContact}  = contactsSlice.actions;


