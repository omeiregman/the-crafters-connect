import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import { MoonLoader } from 'react-spinners';

import EventCard from './EventCard';

import './css/event.css';


class Event extends Component {
  constructor(props){
    super(props);

  }

  componentWillMount() {

  }

  componentDidMount() {
    this.props.getEvents();
  }

  render() {

    const { events, loading } = this.props.events
    let eventData;

    if (loading) {
      return (<div className="event-loader">
        <MoonLoader
        color={'#EA5800'}
        loading={loading}
      />
      <p>Loading Events</p>
      </div>)
    } else {

      if (events.length>1) {
        eventData = events.map(function(event, i){
          return <EventCard
                  name={event.name}
                  startDate={event.startDate}
                  location={event.location}
                  eventImage={`https://thecraftersconnectapi.herokuapp.com/${event.eventImage}`}/>
        })
      }
    }

    return(
      <div className="event-section">
        <header className="event-header">
          <h2 className="page-head-hero">Events</h2>
        </header>

        <section>
          <div className="container">
          <h3 className="event-section-header">Upcoming Events</h3>
          <div className="row">
            {eventData}
          </div>
        </div>
        </section>
        <br></br>
      </div>
    );
  }
}
Event.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps, { getEvents })(Event);
