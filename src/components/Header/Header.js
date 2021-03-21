import React from 'react';
import './Header.css'
import { Button, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { UserContext } from '../../App';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(setLoggedInUser);
    return (
        <div>
            <Navbar bg="info">
                <Navbar.Brand as={Link} to="/"><span className="header">Sirajganj Rides</span></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="mr-auto ">
                        <Nav.Link as={Link} to="/">Home</Nav.Link>
                        <Nav.Link as={Link} to="/destination">Destination</Nav.Link>
                        <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
                        <Nav.Link as={Link} to="/contract">Contract</Nav.Link>
                        
                    </Nav>
                    <Button variant="danger" as={Link} to="/signin">{loggedInUser.userName || loggedInUser.displayName ? loggedInUser.userName || loggedInUser.displayName : "Login"}</Button>
                    
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;