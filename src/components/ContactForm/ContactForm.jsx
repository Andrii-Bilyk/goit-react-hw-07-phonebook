import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import { addContact } from 'redux/contactsSlice';
import styles from './contact-form.module.css';

const ContactForm = () => {
  const contacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const [number, setNumber] = useState('');
  const [name, setName] = useState('');

  const handleChange = e => {
    const { name, value } = e.target;
    if (name === 'name') {
      setName(value);
    }
    if (name === 'number') {
      setNumber(value);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const isInContacts = contacts.some(
      contact => contact.name.toLowerCase().trim() === name.toLowerCase().trim()
    );

    if (isInContacts) {
      alert(`${name} is already in contacts.`);
      return;
    }

    dispatch(addContact({ name, number }));

    setName('');
    setNumber('');
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit}>
      <span>Name</span>
      <input
        type="text"
        name="name"
        required
        value={name}
        onChange={handleChange}
      />
      <span>Number tel:</span>
      <input
        type="tel"
        name="number"
        required
        value={number}
        onChange={handleChange}
      />
      <button className={styles.btn} type="submit">Add contact</button>
    </form>
  );
}

export default ContactForm;
