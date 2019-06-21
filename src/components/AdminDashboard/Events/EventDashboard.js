import React from 'react';
//import PropTypes from 'prop-types';
//import { connect } from 'react-redux';
//import { getEvents } from '../../../actions/eventActions';
import AddEvent from './AddEvent';
import EventList from './EventList';



const EventDashboard=()=>{
        return (
            <div>
                <AddEvent />
                <br></br>
                <EventList />
            </div>
        )

}

export default EventDashboard;
