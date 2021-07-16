import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import { uuid } from 'uuidv4';
import Header from './Header';
import AddContact from './AddContact';
import ContactList from './ContactList';
import ContactDetail from './ContactDetail';


function App() {

  const Local_Storage_Key = "contacts";
  const [contacts, setContacts] = useState([]);

  const addContactHandler = (contact) => {
    setContacts([...contacts, { id: uuid(), ...contact }])
  }

  const removeContactHandler = (id) => {
    const newContactList = contacts.filter((contact) => {
      return contact.id !== id;
    }
    );
    setContacts(newContactList)
  }

  useEffect(() => {
    const retrieveContacts = JSON.parse(localStorage.getItem(Local_Storage_Key));
    if (retrieveContacts) setContacts(retrieveContacts)
  }, []);

  useEffect(() => {
    localStorage.setItem(Local_Storage_Key, JSON.stringify(contacts))
  }, [contacts]);
  return (
    <div>
      <Router>
        <Header />
        <Switch>
          <Route path="/" exact render={(props) => <ContactList {...props} contacts={contacts} getContactId={removeContactHandler}/>} />
          <Route path="/add" component= {(props) => <AddContact {...props} addContactHandler={addContactHandler}/>} />
          <Route path="/contact/:id" component={ContactDetail}/>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
