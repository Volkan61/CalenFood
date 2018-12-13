import React, { Component } from 'react';
import './Navi.css';
import {Nav,MenuItem,NavDropdown,Navbar} from 'react-bootstrap';


class Navi extends Component {


    render() {


    return (
            <Navbar>
                <Nav pullRight>
                    <MenuItem eventKey={1}>Vorrratskammer</MenuItem>
                    <MenuItem eventKey={2}>Einkaufszettel generieren</MenuItem>
                    <MenuItem eventKey={1}>Hinzufügen</MenuItem>

                    <MenuItem eventKey={2}></MenuItem>

                    <NavDropdown eventKey={3} title="Anmelden" id="basic-nav-dropdown">

                        <MenuItem eventKey={3.2}>
                            <div onClick={()=>this.props.history.push('/admin')}>Admin</div>
                        </MenuItem>
                        <MenuItem eventKey={3.1}>


                            <div onClick={()=>this.logout()}>Logout</div>

                        </MenuItem>
                        <MenuItem divider />
                    </NavDropdown>
                </Nav>
            </Navbar>);
    }
}


export default Navi;
