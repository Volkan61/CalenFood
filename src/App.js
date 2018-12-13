import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from 'events';
import Navi from './Navi/Navi';


const event = [
    {
        id: 14,
        title: 'Volkan',
        start: new Date(new Date().setHours(new Date().getHours() - 3)),
        end: new Date(new Date().setHours(new Date().getHours() + 3)),
    }
];




const localizer = BigCalendar.momentLocalizer(moment)

const MyCalendar = props => (
    <div>


        <BigCalendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
)

class App extends Component {


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
      var myEventsList = []

      return (
      <div className="App">

          <Navi></Navi>

          <div className={"calenderContent"}>
              <BigCalendar
                  localizer={localizer}
                  events={this.state.events}
                  startAccessor="start"
                  endAccessor="end"
              />
          </div>

      </div>
    );
  }
}

export default App;

//   <div className={"divTest"} onClick={this.changeEvents}></div>
//   <br></br>
