import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import * as config from '../config';
import './Unit.css';
import AddUnitForm from './Forms/AddUnitForm/AddUnitForm';
import EditUnitForm from './Forms/EditUnitForm/EditUnitTable'
import UnitTable from './Tables/UnitTable/UnitTable'

import { useState,Fragment } from 'react'



class Unit extends Component {
    schema = {
        title: "Unit",
        type: "object",
        required: ["name"],
        properties: {
            name: {type: "string", title: "Name", default: "A new unit"}}
    };


    log = (type) => console.log.bind(console, type);

    constructor(props) {
        super(props);
        this.setEditing = this.setEditing.bind(this);
        this.updateUser = this.updateUser.bind(this);
        this.addUser = this.addUser.bind(this);

    }

    state = {
        users: [
            { id: 1, name: 'Tania', kuerzel: 'Tania' },
            { id: 2, name: 'Craig', kuerzel: 'Tania' },
            { id: 3, name: 'Ben', kuerzel: 'Tania'},
        ],
        editing: false,
        currentUser:null
    };


    // Setting stat
    setUsers = users => {
        this.setState({users:users})
    }

    setCurrentUser = currentUsers => {
        this.setState({currentUser:currentUsers})
    }

    setEditing = (editing) => {
        this.setState({editing:editing})
    }

// CRUD operations
     addUser = (user) => {
        user.id = this.state.users.length + 1
        var addUsers = [ ...this.state.users, user ]
        this.setUsers(addUsers);

    }






    deleteUser = id => {
        this.setEditing(false)
        this.setUsers(this.state.users.filter(user => user.id !== id))
    }

     updateUser = (id, updatedUser) => {

        var aasd = id;
        var asddsa = updatedUser;
         this.setEditing(false)
         this.setUsers(this.state.users.map(user => (user.id === id ? updatedUser : user)))
    }

     editRow = user => {
         this.setEditing(true)
         this.setCurrentUser({ id: user.id, name: user.name, kuerzel: user.kuerzel })
    }

    render() {
        return (

            <div className="container">
                    <div className="one">
                         {this.state.editing ? (
                                <Fragment>
                                    <h2>Edit unit</h2>
                                    <EditUnitForm
                                        editing={this.state.editing}
                                        setEditing={this.setEditing}
                                        currentUser={this.state.currentUser}
                                        updateUser={this.updateUser}
                                    />
                                </Fragment>
                            ) : (
                                <Fragment>
                                    <h2>Add unit</h2>
                                    <AddUnitForm addUser={this.addUser} />
                                </Fragment>
                            )}

                    </div>
                    <div className="two">
                        <h2>View units</h2>
                        <UnitTable users={this.state.users} editRow={this.editRow} deleteUser={this.deleteUser} />
                    </div>
            </div>









    );
       }}




export default Unit;
