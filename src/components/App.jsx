import Form from './Form';

import Contacts from './ContactsList/Contacts';

import Container from './Container';

import Filter from './Filter';

import { useState, useMemo } from 'react';

import { useAddContactMutation } from 'redux/contacts/contactsRtkSlice';

import { useGetContactsQuery } from 'redux/contacts/contactsRtkSlice';

export default function App() {
  const [addContact] = useAddContactMutation();
  const [filter, setFilter] = useState('');
  const { data: contacts } = useGetContactsQuery();

  const createContact = async user => {
    await addContact(user);
  };

  const filterContacts = useMemo(() => {
    return (
      contacts?.filter(item =>
        item.name.toLowerCase().includes(filter.toLowerCase())
      ) ?? []
    );
  }, [filter, contacts]);

  return (
    <Container>
      <h1>Phonebook</h1>
      <Form onSubmit={createContact} />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={setFilter} />
      <Contacts item={filterContacts} />
    </Container>
  );
}
