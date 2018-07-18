import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';
import { PulseLoader } from 'react-spinners';


class SingleEvent extends Component {
  constructor(props){
    super(props);

    this.state = {
      selectedEvent : {}
    }

    }

    componentWillMount() {
      this.props.getEvents();
    }

  render() {

    const selectedEventUrl = this.props.match.params.name;

    const { events, loading } = this.props.events
    let selectedEventData;
    let startDate;

    if (loading || events.length === 0) {
      return (<div className="event-loader">
        <span><PulseLoader
        color={'#EA5800'}
        loading={loading}
      /></span>
      <p>Loading Events</p>
    </div>);
    } else {
      if (events.length>0) {
        const findData = (event) => {
          const isEvent = t => t.url === selectedEventUrl;
          return events.find(isEvent);
        }
        selectedEventData = findData(selectedEventUrl);
        console.log(selectedEventData.startDate);
        startDate = selectedEventData[startDate];
      }
      console.log("New: ",startDate);

    return(
      <section>
        <Link to='/events'>Back to Events</Link>
        <header className="single-event-header">
          <div className="row">
            <div className="col-md-8"></div>
            <div className="col-md-4">
              <h3></h3>
              <h4></h4>
            </div>
          </div>
        </header>
        <div className="">

        </div>
        <br></br>
        <br></br>
        <br></br>
        {/* <h2>{console.log(selectedEventData.name)}</h2> */}
        <h3>
          {/* {selectedEventData.url} */}
        </h3>
        <br></br>
        <br></br>
        <br></br>
      </section>
    );
    }
  }
}

Event.propTypes = {
  getEvents: PropTypes.func.isRequired,
  events: PropTypes.object.isRequired
}

const mapStateToProps = (state) => ({
  events: state.events
})

export default connect(mapStateToProps, { getEvents })(SingleEvent);
