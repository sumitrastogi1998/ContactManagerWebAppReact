import React from 'react'
import { Card, Button, Image } from '../../../node_modules/react-bootstrap';
import {Link} from 'react-router-dom';
import user from '../images/user.jpg'

function ContactDetail(props) {
    
    const {name, email,description} = props.location.state.contact;
    return (
        <Card style={{ width: '20rem', marginLeft: 'auto', marginRight: 'auto', marginTop: '10px'}} className="text-center">
        <Image src={user} roundedCircle />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    {email}
                </Card.Text>
                <Card.Text>
                    {description}
                </Card.Text>
                <Link to='/'>
                <Button variant="primary">GoBack to ContactList</Button>
                </Link>
            </Card.Body>
        </Card>
    )
}

export default ContactDetail
