import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import styles from './filter.module.css';

function Filter() {
  const dispatch = useDispatch();
  const filter = useSelector(selectFilter);

  const handleChange = (e) => {
    dispatch(setFilter(e.target.value));
  };

  return (
    <input
      className={styles.input}
      type="text"
      value={filter}
      onChange={handleChange}
      placeholder="Find contacts by name"
    />
  );
}

export default Filter;
