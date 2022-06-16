import { createSlice } from '@reduxjs/toolkit';
import { nanoid } from 'nanoid';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export const contactsReducer = createSlice({
  name: 'items',
  initialState: {
    items: JSON.parse(window.localStorage.getItem('contacts')) ?? [],
    filter: '',
  },
  reducers: {
    addContact(state, action) {
      const cheakAddContact = name => {
        return state.items.find(item => item.name === name);
      };
      const newContact = cheakAddContact(action.payload.name);
      const contact = {
        id: nanoid(),
        name: action.payload.name,
        number: action.payload.number,
      };
      newContact
        ? alert(`${newContact.name} is already in contacts`)
        : state.items.push(contact);
    },
    deleteContact(state, action) {
      state.items = state.items.filter(({ id }) => id !== action.payload);
    },
    changeFilter(state, action) {
      state.filter = action.payload;
    },
  },
});

export const { addContact, deleteContact, changeFilter } =
  contactsReducer.actions;

export const useInfo = () => {
  const dispatch = useDispatch();
  const selector = useSelector(state => state);
  const createContact = user => dispatch(addContact(user));
  const deleteCont = id => dispatch(deleteContact(id));
  const changeFil = value => dispatch(changeFilter(value));
  const showContact = () => {
    const normalizedFilter = selector.items.filter.toLowerCase();
    return selector.items.items.filter(
      ({ name }) => name && name.includes(normalizedFilter)
    );
  };
  return {
    create: createContact,
    remove: deleteCont,
    change: changeFil,
    show: showContact,
  };
};
