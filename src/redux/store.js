import { contactsReducer } from './contacts/contactsReducer';

import { configureStore } from '@reduxjs/toolkit';

export const store = configureStore({
  reducer: {
    items: contactsReducer.reducer,
  },
});

store.subscribe(() => {
  const state = store.getState();
  window.localStorage.setItem('contacts', JSON.stringify(state.items.items));
});
