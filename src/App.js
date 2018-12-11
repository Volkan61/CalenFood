import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';

import Navbar from 'Navbar/Navbar';

const localizer = BigCalendar.momentLocalizer(moment)

const MyCalendar = props => (
    <div>
        <Navbar/>
        <BigCalendar
            localizer={localizer}
            startAccessor="start"
            endAccessor="end"
        />
    </div>
)

class App extends Component {


  render() {
      var myEventsList = []

      return (
      <div className="App">


          <BigCalendar
              localizer={localizer}
              events={myEventsList}
              startAccessor="start"
              endAccessor="end"
          />
      </div>
    );
  }
}

export default App;
