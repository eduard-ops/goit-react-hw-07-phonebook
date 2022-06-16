import s from './Filter.module.css';

import PropTypes from 'prop-types';

import { useInfo } from 'redux/contacts/contactsReducer';

export default function Filter() {
  const { change } = useInfo();
  return (
    <label className={s.label}>
      Find Contacts by name
      <input onChange={e => change(e.target.value)} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
