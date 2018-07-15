import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SingleEvent extends Component {
  constructor(props){
    super(props);

  }
  render() {

    const selectedEvent = this.props.match.params.name;

    return(
      <div>
        <Link to='/events'>Back to Events</Link>
        <br></br>
        <br></br>
        <br></br>
        <h2>{`#${selectedEvent}page`}</h2>
        <br></br>
        <br></br>
        <br></br>
      </div>
    );
  }

}

export default SingleEvent;
