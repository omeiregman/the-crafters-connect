import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../../actions/eventActions';
import AddEvent from './AddEvent';
import EventList from './EventList';



class EventDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div>
                <AddEvent />
                <br></br>
                <EventList />
            </div>
        )
    }

}

EventDashboard.propTypes = {
    getEvents: PropTypes.func.isRequired,
    events: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
    events: state.events
})

export default connect(mapStateToProps, { getEvents })(EventDashboard);
