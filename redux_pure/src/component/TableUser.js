import React from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from "axios"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';

const TableUser = () => {
  // const [listUsers, setListUsers] = useState();

  // const fetchAllUsers = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all");
  //   const data = res && res.data ? res.data : [];
  //   setListUsers(data);
  // }

  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);
  console.log(listUsers);

  useEffect(() => {
    // fetchAllUsers();
    dispatch(fetchAllUsers());
  }, [])

  const handleDeleteUser = (user) => {
    console.log(user);
  };

  return (
    <Container>
      <hr />
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Email</th>
            <th>UserName</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {listUsers && listUsers.length > 0 && listUsers.map((item, index) => {
            return (
              <tr key={`users-${index}`}>
                <td>{index + 1}</td>
                <td>{item.email}</td>
                <td>{item.username}</td>
                <td>
                  <button
                    onClick={() => handleDeleteUser(item)}
                    className='btn btn-danger'>DELETE</button>
                </td>
              </tr>
            )
          })}

        </tbody>
      </Table>
    </Container>
  );
};

export default TableUser;