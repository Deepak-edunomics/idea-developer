import React from 'react'
import {Nav, NavDropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const SideNav = () => {
    return (
        <Nav bg="light" expand="lg">
            <div>
                    <Link to="/dashboard" class="nav-link btn btn-info">Workspace</Link>
                    <Link to="/challenges" class="nav-link btn btn-info">Challenges</Link>
                    <Link to="/ideas" class="nav-link btn btn-info">Ideas</Link>
                <Link to="/executionBoards" class="nav-link btn btn-info">Execution Boards</Link>
                
                     <Nav.Link as={Link} to={"/reports"}>Reports</Nav.Link>
                

                <NavDropdown title="User Management" id="basic-nav-dropdown">

                    <NavDropdown.Item >
                        as={Link} to={"/workspace"}
                        <Link to="/employees" >Employees</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                        <Link to="/roles" >Roles</Link>
                    </NavDropdown.Item>

                    <NavDropdown.Item >
                        <Link to="/groups" >Groups</Link>
                    </NavDropdown.Item>

                </NavDropdown>
            </div>
        </Nav>
    )
}

export default SideNav
