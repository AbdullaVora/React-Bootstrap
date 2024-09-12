import React, { useEffect, useState } from 'react';
import Table from 'react-bootstrap/Table';
import { Button } from 'react-bootstrap';
import {Link} from 'react-router-dom';


const DataTable = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const oldData = JSON.parse(localStorage.getItem('data')) || [];
        setData(oldData);
    }, []); 

    return (
        <div>
            <Link to="/"><Button className='mb-3' variant='primary'>Add Data</Button></Link>
            <Table striped bordered hover>
                <thead>
                    <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Contact</th>
                        <th>Option</th>
                        <th>Rating</th>
                        <th>Feedback</th>
                    </tr>
                </thead>
                <tbody>
                    {data.map((item, index) => (
                        <tr key={index}>
                            <td>{index + 1}</td>
                            <td>{item.firstName}</td>
                            <td>{item.lastName}</td>
                            <td>{item.email}</td>
                            <td>{item.contact}</td>
                            <td>{item.Option}</td>
                            <td>{item.Rating}</td>
                            <td>{item.Feedback}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
        </div>
    );
};

export default DataTable;
