import React from 'react'
import { Card, Button } from '../../../node_modules/react-bootstrap';

function ContactCard(props) {
    const {contact} = props; 
    
    return (
        <Card style={{ margin: "20px"}}>
            <Card.Header as="h5">{contact.name}</Card.Header>
            <Card.Body>
                <Card.Text>{contact.email}</Card.Text>
                <Card.Text>{contact.description}</Card.Text>
                <Button variant="danger" onClick={() => props.clickHandler(contact.id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default ContactCard
