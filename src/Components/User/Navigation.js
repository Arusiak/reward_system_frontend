import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

function Navigation (){
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white NotCircle" to="/allpoints">
                            <i className="fas fa-bell"></i>
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/otherUsers">
                            <i className="fas fa-users"></i>
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/rules">
                            <i className="fas fa-exclamation"></i>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
}

export default Navigation;