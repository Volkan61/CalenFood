import React, { useState } from 'react'
import Form from "react-jsonschema-form";
import { Component ,useEffect } from 'react';


// Formular
const schema = {
    type: "object",
    properties: {
        User: {
            type: "object",
            properties: {
                name: {type: "string", default: ""},
                kuerzel: {type: "string", default: ""}


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

class AddUnitForm extends Component {



    constructor(props) {
        super(props);
        this.transform = this.transform.bind(this);

    }

    state = {
        formData: {User: {name: "",kuerzel: ""}},
        user: {id: null, name: '', kuerzel: '' },
    };

    setUser = user => {
            this.setState(user)
    }




    transform(form) {
        const formData = JSON.parse(JSON.stringify(form.formData));
//        formData.greeting = `Hello ${formData.name}!`;
      //  this.setState({formData:formData});
        var asdd = formData.User.name;
        var sdfsdf = formData.User.username;

        this.setState({ user: {name: formData.User.name,kuerzel: formData.User.kuerzel} });
        this.setState({formData: {User: {name: formData.User.name,kuerzel: formData.User.kuerzel}}});

        // this.setState({user: { name: formData.User.name, username: formData.User.username }});
    }

    render() {
    return (

        <div>

            <Form
                onSubmit={() => {
                    this.props.addUser(this.state.user)
                    // this.setUser(this.state.initialFormState)
                }}
                formData={this.state.formData}
                schema={schema}
                uiSchema={uiSchema}
                onChange={this.transform}

            >
            </Form>

        </div>

    )
}
}
export default AddUnitForm;