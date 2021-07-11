import React from 'react'
import { Card } from '../../../node_modules/react-bootstrap';

const Header = () => {
  return (
    <Card className="text-center" style={{ backgroundColor: 'red' }}>
      <Card.Header as="h5">Contact Manager</Card.Header>
    </Card>
  )
}

export default Header
