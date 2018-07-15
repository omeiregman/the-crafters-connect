import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';


const EventCard = ({
  id,
  name,
  eventImage,
  location,
  startDate,
}) => {
  return(
    <div className="col-sm-4">
      <Link to='/' key={name}>
      <div className="event-card">
        <img src={eventImage} alt="event image"/>
        <h4>{startDate}</h4>
        <h3>{name}</h3>
        <h5>{location}</h5>
        <p>More Details <i className="more-icon fas fa-arrow-right"></i></p>
      </div>
    </Link>
    </div>
  );
}

EventCard.PropTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired,
  startDate: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
}

export default EventCard;
