import React from 'react'
import ContactCard from './ContactCard';
import { Button } from '../../../node_modules/react-bootstrap';
import { Link } from 'react-router-dom';

const ContactList = (props) => {
    const { contacts, getContactId } = props;
    const deleteContact = (id) => {
        getContactId(id);
    }
    const renderContactList = contacts.map((contact) => {
        return (
            <ContactCard contact={contact} clickHandler={deleteContact} key={contact.id} />
        )
    })
    return (
        <div style={{ margin: "20px"}}>
        <h2 style={{ marginLeft: "10px"}}>Contact List
            <Link to="/add">
                <Button variant="primary" style={{ float: 'right'}}>Add Contact</Button>
            </Link>
        </h2>
            {renderContactList}
        </div>
    )
}

export default ContactList
