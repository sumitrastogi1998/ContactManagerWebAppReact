import React from 'react'
import { Card, Button } from '../../../node_modules/react-bootstrap';
import { Link } from 'react-router-dom';
function ContactCard(props) {
    const { id, name, email, description } = props.contact;

    return (
        <Card style={{ margin: "20px" }}>
            <Link to={{ pathname: `/contact/${id}`, state: { contact: props.contact } }}>
                <Card.Header as="h5">{name}</Card.Header>
            </Link>
            <Card.Body>
                <Card.Text>{email}</Card.Text>
                <Card.Text>{description}</Card.Text>
                <Button variant="danger" onClick={() => props.clickHandler(id)}>Delete</Button>
            </Card.Body>
        </Card>
    )
}

export default ContactCard
