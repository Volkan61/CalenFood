import React, { Component } from 'react';
import './App.css';
import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import 'react-big-calendar/lib/css/react-big-calendar.css';
import events from 'events';
import Navi from './Navi/Navi';
import Unit from './Unit/Unit'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import Calender from "./Calender/Calender";

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


    constructor(props) {
        super(props);
    }


  render() {
      return (
      <div className="App">
          <Navi></Navi>


          <Router>
              <div>
                  <ul>
                      <li>
                          <Link to="/">Home</Link>
                      </li>
                      <li>
                          <Link to="/unit">Unit</Link>
                      </li>
                      <li>
                          <Link to="/calender">Calender</Link>
                      </li>
                  </ul>
                  <hr />

                  <Route exact path="/" component={Calender} />
                  <Route path="/unit" component={Unit} />
                  <Route path="/calender" component={Calender} />

              </div>
          </Router>
      </div>
    );
  }
}

export default App;
