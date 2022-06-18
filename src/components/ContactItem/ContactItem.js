import s from './ContactItem.module.css';

import { useDeleteContactMutation } from 'redux/contacts/contactsRtkSlice';

export default function ContactItem({ id, name, phone }) {
  const [deleteContact, res] = useDeleteContactMutation();
  return (
    <>
      <li className={s.item}>
        <p>{name}:</p>
        <span className={s.tel}>{phone}</span>
        <button
          type="button"
          className={s.button}
          onClick={() => deleteContact(id)}
          disabled={res.isLoading}
        >
          Delete
        </button>
      </li>
    </>
  );
}
