import React from 'react'
import ContactCard from './ContactCard';

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
        <div>
            {renderContactList}
        </div>
    )
}

export default ContactList
