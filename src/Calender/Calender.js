import React, { Component } from 'react';
import Form from "react-jsonschema-form";
import BigCalendar from "react-big-calendar";
import events from 'events';
import moment from 'moment'


const event = [
    {
        id: 14,
        title: 'Volkan',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    }
];

const log = (type) => console.log.bind(console, type);

const localizer = BigCalendar.momentLocalizer(moment)

class Calender extends Component {


    state = {
        events: event
    };

    constructor(props) {
        super(props);

        this.changeEvents = this.changeEvents.bind(this);
    }


    changeEvents() {

        console.log("TETEWR");

        var newArr = this.state.events;
        newArr.push(
            {
                id: 15,
                title: 'Test',
                start: new Date(new Date().setHours(new Date().getHours() -5)),
                end: new Date(new Date().setHours(new Date().getHours() -4)),
            }
        );

        this.setState({events:newArr})
    }

    render() {


        return (
            <div className={"calenderContent"}>
                <BigCalendar
                    localizer={localizer}
                    events={this.state.events}
                    startAccessor="start"
                    endAccessor="end"
                />
            </div>
        );
    }
}


export default Calender;
