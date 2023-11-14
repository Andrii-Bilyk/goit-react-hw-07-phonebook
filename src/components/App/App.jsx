import React, { useEffect } from 'react'; 
import ContactForm from '../ContactForm/ContactForm';
import Filter from '../Filter/Filter';
import ContactList from '../ContactList/ContactList';
import styles from './app.module.css';
import { useDispatch } from 'react-redux';
import { fetchContacts } from 'redux/operations';

function App() {
  const dispatch = useDispatch()
  useEffect(()=>{
dispatch(fetchContacts())
  },[dispatch])
  return (
    <div className={styles.wrapper}>
        <div className={styles.container}>
          {/* <img src="../Image/backgroun.jpg" alt="sad" /> */}
          <h1>Phonebook</h1>
          <ContactForm />
          <h2>Contacts</h2>
          <Filter />
          <ContactList />
        </div>
    </div>
  );
}

export default App;
