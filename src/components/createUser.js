import React from 'react'
import { Button, Form } from 'semantic-ui-react'
import { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const CreateUser = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const postData = () => {
        axios.post(`http://localhost:3001/users`, {
            name,
            email,
            password
        })
    }

    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name: </label>
                    <input placeholder='Name ' onChange={(e) => setName(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email: </label>
                    <input placeholder='email ' onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input placeholder='Password ' onChange={(e) => setPassword(e.target.value)} />
                </Form.Field>
                <Link to='/showusers'>
                    <Button onClick={postData} type='submit'>Submit</Button>
                </Link>
            </Form>
        </div>
    )
}
export default CreateUser;

