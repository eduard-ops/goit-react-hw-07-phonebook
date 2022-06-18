import s from './Filter.module.css';

import PropTypes from 'prop-types';

export default function Filter({ value, onChange }) {
  return (
    <label className={s.label}>
      Find Contacts by name
      <input value={value} onChange={e => onChange(e.target.value)} />
    </label>
  );
}

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
};
