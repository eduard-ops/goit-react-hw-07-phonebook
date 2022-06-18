import { configureStore } from '@reduxjs/toolkit';

import { contactsSplice } from './contacts/contactsRtkSlice';

export const store = configureStore({
  reducer: {
    [contactsSplice.reducerPath]: contactsSplice.reducer,
  },
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(contactsSplice.middleware),
});
