import Form from './Form';

import Contacts from './ContactsList/Contacts';

import Container from './Container';

import Filter from './Filter';

import { useInfo } from 'redux/contacts/contactsReducer';

export default function App() {
  const { create } = useInfo();
  const createContact = user => {
    create(user);
  };
  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={createContact} />
      <h2>Contacts</h2>
      <Filter />
      <Contacts />
    </Container>
  );
}
