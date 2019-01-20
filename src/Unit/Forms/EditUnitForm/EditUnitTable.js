import React, { useState, useEffect } from 'react'
import { Component } from 'react';
import Form from "react-jsonschema-form";

// Formular
const schema = {
    type: "object",
    properties: {
        User: {
            type: "object",
            properties: {
                name: {type: "string", default: ""},
                kuerzel: {type: "string", default: "hfh"},
            }
        }
    }
}

const uiSchema = {
    User: {
        Episodes: {
            "ui:widget": "textarea"
        },
    }
}

class EditUnitForm extends Component {

    constructor(props) {
        super(props);
        this.transform = this.transform.bind(this);

    }

    state = {
        formData: {User: {name: "test",kuerzel: ''}},
        user: {id: null, name: '', kuerzel: '' },

    };


    setUser = user => {
        this.setState({user});
    }

    componentDidMount() {
      //  this.setState({name:this.props.currentUser.name,username:this.props.currentUser.username,id:this.props.currentUser.id});
        this.setState({user: {id:this.props.currentUser.id, name:this.props.currentUser.name,kuerzel:this.props.currentUser.kuerzel}});
        this.setState({formData: {User: {name: this.props.currentUser.name,kuerzel:this.props.currentUser.kuerzel,id:this.props.currentUser.id}}});
    }

    // You can tell React to skip applying an effect if certain values haven’t changed between re-renders. [ props ]

    handleInputChange = event => {
        const { name, value } = event.target
       this.setState({ ...this.state, [name]: value })
    }

    transform(form) {
        const formData = JSON.parse(JSON.stringify(form.formData));
        formData.greeting = `Hello ${formData.name}!`;
        this.setState({formData:formData});
        this.setState({user: { id: this.props.currentUser.id, name: formData.User.name, kuerzel: formData.User.kuerzel},});
    }

    onSub = (name) => {
        console.log(name);
    }

    render() {
        return (
        <div>
            <Form
                onSubmit={()=>this.props.updateUser(this.state.user.id, this.state.user)}
                schema={schema}
                uiSchema={uiSchema}
                formData={this.state.formData}
                onChange={this.transform}
            >
                <button type="submit" className="btn btn-primary">Submit</button>
                <button onClick={() => this.props.setEditing(false)} className="btn btn-primary">Cancel</button>
            </Form>
        </div>
    )
}

}

export default EditUnitForm;