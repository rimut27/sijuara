import React, { Component } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Logo from "./icon/logo-sijuara-with-text.svg";
import rumah from "./icon/home-active.svg";
import Aspirasi from "./icon/aspirasi.svg";
import Notif from "./icon/notifikasi-with-badge.svg";
import Profil from "./icon/profil.svg";
import { Link, useLocation } from 'react-router-dom';;


const Navigation = () => {
  const location = useLocation();
    if (location.pathname === '/Login') {
      return null; // Jangan render navbar
    }
    if (location.pathname === '/Daftar') {
      return null; // Jangan render navbar
    }
    return (
      <div>
        <Navbar bg="light" data-bs-theme="light">
          <Container>
            <Navbar className="bg-body-tertiary">
              <Container>
                <Navbar.Brand as={Link} to="/">
                  <img src={Logo} alt="" width={100} height={50} />
                </Navbar.Brand>
              </Container>
            </Navbar>
            <Nav className="me-auto">
              <Nav.Link as={Link} to="/Verifikasi">Verifikasi</Nav.Link>
              <Nav.Link as={Link} to="/Dokumen">Dokumen</Nav.Link>
              <Nav.Link as={Link} to="/Rekomendasi">Rekomendasi</Nav.Link>
            </Nav>

            <Form className="d-flex m-3">
              <Form.Control
                type="search"
                placeholder="Search"
                className="me-2"
                aria-label="Search"
              />
              <Button variant="outline-success">Search</Button>
            </Form>
            <Nav className="m-2">
              <Nav.Link className="m-auto" as={Link} to="/">
                <img src={rumah} alt="Home" width={20} height={20} />
              </Nav.Link>
              <Nav.Link className="m-auto" as={Link} to="/Notification">
                <img src={Notif} alt="Notif" width={20} height={20} />
              </Nav.Link>
              <Nav.Link className="m-auto" as={Link} to="/Profil">
                <img src={Profil} alt="Notif" width={20} height={20} />
         </Nav.Link>
         <Nav.Link as={Link} to="/Login">Login</Nav.Link>
         <Nav.Link as={Link} to="/Login">Logout</Nav.Link>
              
          </Nav>
        </Container>
      </Navbar>
      </div >

    );
  }

export default Navigation;
