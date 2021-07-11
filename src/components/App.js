import React, {useState, useEffect} from 'react';
import './App.css';
import {uuid} from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';


function App() {

  const Local_Storage_Key = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, {id: uuid(), ...contact}])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact)=>{
      return contact.id !== id;
    }
  );
  setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if(retrieveContacts)  setContacts(retrieveContacts)
  },[]);

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts))
  },[contacts]);
  return (
    <div>
      <Header/>
      <AddContact addContactHandler={addContactHandler}/>
      <ContactList contacts={contacts} getContactId={removeContactHandler}/>
    </div>
  );
}

export default App;
