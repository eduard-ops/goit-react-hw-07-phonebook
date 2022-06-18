import s from './Contacts.module.css';

import PropTypes from 'prop-types';

import ContactItem from 'components/ContactItem';

import { useGetContactsQuery } from 'redux/contacts/contactsRtkSlice';

export default function Contacts({ item }) {
  const { isLoading } = useGetContactsQuery();

  return (
    <ul className={s.list}>
      {isLoading ? (
        <b>Загружаем контакты</b>
      ) : (
        item.map(item => {
          return (
            <ContactItem
              key={item.id}
              id={item.id}
              name={item.name}
              phone={item.phone}
            />
          );
        })
      )}
    </ul>
  );
}

Contacts.propTypes = {
  clickDelete: PropTypes.func,
  item: PropTypes.arrayOf(
    PropTypes.shape({
      name: PropTypes.string,
      number: PropTypes.string,
      id: PropTypes.string,
    })
  ),
};

//f
