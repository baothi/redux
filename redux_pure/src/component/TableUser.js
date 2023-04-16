import React, { Fragment } from 'react';
import Container from 'react-bootstrap/Container';
import Table from 'react-bootstrap/Table';
import axios from "axios"
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchAllUsers } from '../action/actions';
import { deleteUserRedux } from "../action/actions";


const TableUser = () => {
  // const [listUsers, setListUsers] = useState();

  // const fetchAllUsers = async () => {
  //   const res = await axios.get("http://localhost:8080/users/all");
  //   const data = res && res.data ? res.data : [];
  //   setListUsers(data);
  // }

  const dispatch = useDispatch();
  const listUsers = useSelector((state) => state.user.listUsers);
  const isLoading = useSelector((state) => state.user.isLoading);
  const isError = useSelector((state) => state.user.isError);

  useEffect(() => {
    // fetchAllUsers();
    dispatch(fetchAllUsers());
  }, [])

  const handleDeleteUser = (user) => {
    dispatch(deleteUserRedux(user.id));
  };

  if (isError === false && isLoading === true) {
    return (
      <Container>
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
            <div>
              Something is loading data
            </div>
          </tbody>
        </Table>
      </Container>
    )
  }
  if (isError === false && isLoading === false) {
    return (
      <Container>
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
    )
  }

  if (isError === true && isLoading === false) {
    return (
      <Container>
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
            <div>Something wrongs, please try again ....</div>
          </tbody>
        </Table>
      </Container>
    )
  }

  // return (
  //   <Container>
  //     <hr />
  //     <Table striped bordered hover>
  //       <thead>
  //         <tr>
  //           <th>#</th>
  //           <th>Email</th>
  //           <th>UserName</th>
  //           <th>Action</th>
  //         </tr>
  //       </thead>
  //       <tbody>
  //         {isError === true ?
  //           <>
  //             <div>Something wrongs, please try again ....</div>
  //           </>
  //           :
  //           <>
  //             {isLoading === true ?
  //               <>
  //                 <div>
  //                   Something is loading data
  //                 </div>
  //               </>
  //               :
  //               <>

  //               </>
  //             }


  //           </>
  //         }


  //       </tbody>
  //     </Table>
  //   </Container>
  // );
};

export default TableUser;