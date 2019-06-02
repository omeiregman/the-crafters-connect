import React, { Component, Fragment } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents, registerEvent } from '../../actions/eventActions';
import { PulseLoader } from 'react-spinners';
import SingleEventCard from './SingleEventCard';//this constains the template for the single event
import EventCard from './EventCard';
import EventRegistration from '../Modalpages/events/EventRegistration';


class SingleEvent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      selectedEvent: {},
      closeModal: false,
      eventId: '',
      eventName: ''
    }
  }

  onCloseclick = () => {
    this.setState({ closeModal: !this.state.closeModal });
  }
  onSubmit = ({ ...data }) => e => {
    e.preventDefault();

    const newRegister = ({
      name: data.name,
      email: data.email,
      phone: data.phone,
      address: data.address,
      eventId: this.state.eventId,
      eventName: this.state.eventName
    })

    this.props.registerEvent(newRegister);
    this.onCloseclick();

  }
  componentWillMount() {
    this.props.getEvents();
  }

  render() {

    const selectedEventUrl = this.props.match.params.name;

    const { events, loading } = this.props.events

    let selectedEventData, eventId, eventImage, registration, name, startDate, time, location, Data, info, eventsView;

    if (events.length > 0) {
      eventsView = events.slice(0, 3).map(event => {
        return (

          <EventCard
            key={event._id}
            url={event.url}
            name={event.name}
            startDate={event.startDate}
            location={event.location}
            eventImage={event.eventImage} />

        )
      });
    }


    if (loading || events.length === 0) {
      return (<div className="event-loader">
        <span><PulseLoader
          color={'#EA5800'}
          loading={loading}
        /></span>
        <p>Loading Events</p>
      </div>);
    } else {
      if (events.length > 0) {
        const findData = (event) => {
          const isEvent = t => t.url === selectedEventUrl;
          return events.find(isEvent);
        }
        selectedEventData = findData(selectedEventUrl);
        startDate = selectedEventData.startDate;
        eventImage = selectedEventData.eventImage;
        name = selectedEventData.name;
        time = selectedEventData.time;
        location = selectedEventData.location;
        info = selectedEventData.info;
        registration = selectedEventData.registration;
        eventId = selectedEventData._id;
        //this.setState({eventName:name, eventId:eventId})
        this.state.eventName = name;
        this.state.eventId = eventId;
      }
      //alert(selectedEventData.registration);
      Data = {
        startDate: startDate,
        eventImage: eventImage,
        name: name,
        time: time,
        location: location,
        info: info,
        registration: registration
      }


      const button = (<button className="btn btn-white" onClick={this.onCloseclick}>Register</button>);

      return (
        <Fragment>
          {this.state.closeModal ? <EventRegistration onSubmit={(data) => this.onSubmit(data)} onClick={this.onCloseclick} /> : ("")}
          <div className="container">
            <br />
            <div className="row">
              <div className="col-md-4">
                <Link className="back" to='/events'>Back to Events</Link>
              </div>

            </div>
            <div className="row">
              <div className="col-md-12">
                <SingleEventCard button={button} data={Data} />
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">

                <h4 style={{ color: '#EA5800' }} className="m-md-3">Other Events</h4>

              </div>

            </div>
            <div className="row">

              {eventsView}

            </div>
          </div>
        </Fragment>
      );
    }
  }
}

Event.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired,
  registerEvent: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps, { getEvents, registerEvent })(SingleEvent);
