import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from './redux/contacts/contactsSlice';
import filtersReducer from './redux/filters/filtersSlice';
import authReducer from './redux/auth/authSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
    filters: filtersReducer,
    auth: authReducer,
  },
});
