import axios from 'axios';
import React, { useEffect, useState  } from 'react';
import { Table, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';




const ShowUsers = ({hijoAPadre}) => {
   

    
    const [APIData, setAPIData] = useState([]);
    useEffect(() => {
        axios.get(`http://localhost:3001/users`)
            .then((response) => {
                console.log(response.data)
                setAPIData(response.data);
            })
    }, []);

    // const setData = (data) => {
    //     // let { user_id, namep, email_user, status_id, passwordp } = data;
     
    //     // let { user_id, name, email_user, status_id, password } = data;
    //     // localStorage.setItem('user_id', user_id);
    //     // localStorage.setItem('name', name);
    //     // localStorage.setItem('email_user', email_user);
    //     // localStorage.setItem('status_id', status_id);
    //     // localStorage.setItem('password', password);
    //     // console.log(user_id + ' ' + name + ' ' + email_user + ' ' + status_id + ' ' + password); 
    // }

    const getData = () => {
        axios.get(`http://localhost:3001/users`)
            .then((getData) => {
                setAPIData(getData.data);
            })
    }

    const onDelete = (user_id) => {
        axios.delete(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData/${user_id}`)
            .then(() => {
                getData();
            })
    }

    return (
        <div>
            <Table singleLine>
                <Table.Header>
                    <Table.Row>
                        <Table.HeaderCell>Id</Table.HeaderCell>
                        <Table.HeaderCell>Name</Table.HeaderCell>
                        <Table.HeaderCell>Email</Table.HeaderCell>
                        <Table.HeaderCell>Estatus</Table.HeaderCell>
                        <Table.HeaderCell>Password</Table.HeaderCell>
                        <Table.HeaderCell>Update</Table.HeaderCell>
                        <Table.HeaderCell>Delete</Table.HeaderCell>
                    </Table.Row>
                </Table.Header>

                <Table.Body>
                    {APIData.map((data, index) => {
                        return (
                            <Table.Row key ={index}>
                                <Table.Cell>{data.user_id}</Table.Cell>
                                <Table.Cell>{data.name}</Table.Cell>
                                <Table.Cell>{data.email_user}</Table.Cell>
                                <Table.Cell>
                                    {data.status_id === 1 ? (
                                    <div>Activo</div>
                                    ) : data.status_id === 2 ? (
                                    <div>
                                        Inactivo
                                    </div>
                                    ) : data.status_id === 3 ? (
                                    <div>Eliminado</div>
                                    ) : (
                                    <div>No option selected</div>
                                    )}
                                </Table.Cell>
                               
                                    <Table.Cell>
                                    
                                    <Link to="/updateuser" >
                                        <Button onClick={() => hijoAPadre(data)}>Update</Button>
                                    </Link>
                                    </Table.Cell>
                                
                                <Table.Cell>
                                    <Button onClick={() => onDelete(data.user_id)}>Delete</Button>
                                </Table.Cell>
                            </Table.Row>
                        )
                    })}
                </Table.Body>
                <Link to='/createuser'>
                    <Button>create</Button>
                </Link>
            </Table>
        </div>
    )
}

export default ShowUsers;