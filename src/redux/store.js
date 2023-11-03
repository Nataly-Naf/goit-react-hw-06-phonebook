import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer } from "./contactsSlice";

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
}
});



// export const deleteContact = (value) => {
//   return {
// type: 'contacts/delete',
//   payload: value,
//   }
  
// }