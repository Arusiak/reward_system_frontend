import React from 'react';
import {NavLink} from 'react-router-dom';
import {Navbar, Nav} from 'react-bootstrap';

class Navigation extends React.Component{
    render() {
        return(
            <Navbar bg="dark" expand="lg">
                <Navbar.Toggle aria-controls="basic-navbar-nav"/>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav>
                        <NavLink className="d-inline p-2 bg-dark text-white AdminNotCircle" to="/usersgift">
                            <i className="fas fa-bell"></i>
                        </NavLink>
                        <NavLink className="d-inline p-2 bg-dark text-white" to="/allpointsusers">
                            <i className="fas fa-users"></i>
                        </NavLink>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}

export default Navigation;