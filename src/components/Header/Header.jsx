import React from 'react'
import "./Header.css"
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'
import Nav from 'react-bootstrap/Nav'

function Header() {
    return (
        <div>
             <Navbar className="p-3" bg="light" variant="light">
    <Container>
    <Navbar.Brand href="#home">Leticia Aldaco</Navbar.Brand>
    <Nav className="text-end">
      <Nav.Link href="#about">About</Nav.Link>
      <Nav.Link href="#work">My Work</Nav.Link>
      <Nav.Link href="#contact">Contact</Nav.Link>
      <Nav.Link href="#resume">Resume</Nav.Link>
    </Nav>
    </Container>
  </Navbar>
        </div>
    )
}

export default Header
