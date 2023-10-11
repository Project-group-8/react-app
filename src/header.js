import './header.css'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from './logo.png';
import 'bootstrap/dist/css/bootstrap.min.css';
import {CiLocationOn}from 'react-icons/ci'



// Find a store

function Header (){
return(
  
    <>
    <Navbar className="nav" expand="lg">
      <Container>
        <Navbar.Brand href="#home"><img  className='logo' src={logo}  width={90} alt='logo' ></img>    </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="#home" >MENU</Nav.Link>
            <Nav.Link href="#link">LINK</Nav.Link>
            <Nav.Link href="#link">LINK</Nav.Link>
            <Nav.Link href="#link">LINK</Nav.Link>
            <Nav.Link href="#link">LINK</Nav.Link>

          </Nav>

  
        </Navbar.Collapse>
        <Nav.Link href="#Find a store"><CiLocationOn/> Find a store</Nav.Link>
      </Container>
    </Navbar>
    </>
   

);
}

export default Header;





