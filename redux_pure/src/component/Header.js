
import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useDispatch, useSelector } from 'react-redux';

const Header = () => {
  const listUsers = useSelector((state) => state.user.listUsers);
  return (
    <>
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <Nav.Link href="#home">Home</Nav.Link>
              <Nav.Link href="#link">Link</Nav.Link>
              <NavDropdown style={{ marginLeft: "50px" }} title={`${listUsers.length} user`} id="basic-nav-dropdown">
                {listUsers && listUsers.length > 0 &&
                  listUsers.map((item, index) => {
                    return (
                      <NavDropdown.Item
                        key={`user-${index}`}
                        href="#">{item.email}</NavDropdown.Item>
                    )
                  })
                }
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">
                  Separated link
                </NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar >
    </>
  );
};

export default Header;