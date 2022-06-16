import s from './Contacts.module.css';

import PropTypes from 'prop-types';

import { useInfo } from 'redux/contacts/contactsReducer';

export default function Contacts() {
  const { remove, show } = useInfo();
  const items = show();

  return (
    <ul className={s.list}>
      {items.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.item}>
            <p>{name}:</p>
            <span className={s.tel}>{number}</span>
            <button
              type="button"
              className={s.button}
              onClick={() => remove(id)}
            >
              Delete
            </button>
          </li>
        );
      })}
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
