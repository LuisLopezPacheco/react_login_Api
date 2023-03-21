import React, { useState, useEffect } from 'react';
import { Button, Form } from 'semantic-ui-react'
import axios from 'axios';


const UpdateUser = (data) => {
    // let history = useNavigate();
    //let { user_id, namep, email_user, status_id, passwordp } = data;
    let { user_id, name, email_user, status_id, password } = data.props ;
   
    const [id, setId] = useState(user_id);
    const [namep, setNamep] = useState(name);
    const [email, setEmail] = useState(email_user);
    const [estatus, setEstatus] = useState(status_id);
    const [passwordd, setPasswordd] = useState(password);
   
    // const dataProps = (props) => {
    //     let { user_id, namep, email_user, status_id, passwordp } = props;
    //     setId(user_id);
    //     setName(namep);
    //     setEmail(email_user);
    //     setEstatus(status_id);
    //     setPassword(passwordp);
    //     console.log("dataProps: " );
    // };

    useEffect(() => {
        // let { user_id, namep, email_user, status_id, passwordp } = props;
        // setId(user_id);
        // setName(namep);
        // setEmail(email_user);
        // setEstatus(status_id);
        // setPassword(passwordp);
        // console.log("dataProps: " );
        // setId(localStorage.getItem('user_id'));
        // console.log("user: "+ id );
        // setName(localStorage.getItem('name'));
        // setEmail(localStorage.getItem('email_user'));
        // setEstatus(localStorage.getItem('status_id'));
        // setPassword(localStorage.getItem('password'));
        //   console.log(user_id + ' ' + namep + ' ' + email_user + ' ' + status_id + ' ' + passwordp);   
    }, []);

    const UpdateAPIData = () => {
        console.log(id + ' ' + name + ' ' + email + ' ' + estatus + ' ' + password);    
        axios.put(`http://localhost:3001/users/${id}`, {
            id,
            namep,
            email,
            estatus,
            passwordd
        }).then(() => {
            // history.push('/read')
           console.log('ok');
        })
    }
    return (
        <div>
            <Form className="create-form">
                <Form.Field>
                    <label>Name: </label>
                    <input value={namep} onChange={(e) => setNamep(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Email: </label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Estatus: </label>
                    <input value={estatus} onChange={(e) => setEstatus(e.target.value)} />
                </Form.Field>
                <Form.Field>
                    <label>Password: </label>
                    <input value={passwordd} onChange={(e) => setPasswordd(e.target.value)} />
                </Form.Field>
                <Button onClick={UpdateAPIData} type='submit'>Submit</Button>
            </Form>
        </div>
    )
}

export default UpdateUser;