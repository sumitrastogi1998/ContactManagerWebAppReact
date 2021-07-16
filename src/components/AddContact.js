import React, { Component } from 'react'
import { Button, Form } from '../../../node_modules/react-bootstrap';

export class AddContact extends Component {

  state = {
    name: "",
    email: "",
    description: ""
  }

  add = (e) => {
    e.preventDefault();
    if(this.state.name==="" || this.state.email === ""|| this.state.description === ""){
      alert("All fields are mandatory");
      return;
    }
    this.props.addContactHandler(this.state);
    this.setState({name: "", email: "", description:""})
    this.props.history.push('/');
  }
  render() {
    return (
      <div style={{ margin: "20px" }}>
      <h1> Add Contact </h1>
      <div onSubmit={this.add}>
        <Form>
          <Form.Group>
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Enter Name" value={this.state.name} onChange={(e) => this.setState({name: e.target.value})}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={this.state.email} onChange={(e) => this.setState({email: e.target.value})}/>
          </Form.Group>
          <Form.Group>
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="Enter Description" value={this.state.description} onChange={(e) => this.setState({description: e.target.value})}/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
        </Form>
      </div>
      </div>
    );
  }
}

export default AddContact
