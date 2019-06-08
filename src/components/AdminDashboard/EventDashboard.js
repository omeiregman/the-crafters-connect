import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { getEvents } from '../../actions/eventActions';



import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
// import { uploadFile } from 'react-s3';


const config = {
    bucketName: process.env.REACT_APP_S3_BUCKET_NAME,
    dirName: 'events',
    region: 'us-west-1',
    accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
    secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
}



class EventDashboard extends Component {
    constructor(props) {
        super(props);

        this.state = {
            name: '',
            startDate: '',
            endDate: '',
            url: '',
            time: '',
            description: '',
            info: '',
            location: '',
            eventImage: '',
            file: ''
        }



        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.upload = this.upload.bind(this);

    }

    componentDidMount() {
        this.props.getEvents();
    }


    upload(e) {
        this.setState({
            file: e.target.files[0]
        })
    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();

        // if (this.state.name && this.state.startDate && this.state.time && this.state.description
        //     && this.state.info && this.state.location) {
        //     uploadFile(this.state.file, config).then(data => {
        //         console.log("Entered upload");
        //         this.setState({
        //             eventImage: data.location
        //         });
        //     })
        //         .then(() => {
        //             const eventData = {
        //                 name: this.state.name,
        //                 startDate: this.state.startDate,
        //                 endDate: this.state.endDate,
        //                 url: this.state.name.replace(/\s+/g, '').toLowerCase(),
        //                 time: this.state.time,
        //                 description: this.state.description,
        //                 info: this.state.info,
        //                 location: this.state.location,
        //                 eventImage: this.state.eventImage,
        //             }
        //             console.log(eventData);
        //         }
        //         )
        //         .catch(err => console.error("An Error Occured ", err));

        // } else {
        //     alert("Please fill in the required fields to create an event");
        // }
    }

    render() {
        return (
            <section>
                <h2>Event Dashboard</h2>
                <br></br>
                <div className="row">
                    <div className="col-md-6">
                        <h2>EventList</h2>

                    </div>
                    <div className="col-md-6">
                        <h3>Create New Event</h3>
                        <form>
                            <div className="form-group">
                                <label>Event Name  (Required)</label>
                                <TextFieldGroup
                                    name="name"
                                    value={this.state.name}
                                    onChange={this.onChange}

                                    info="Enter Name of Event" />
                            </div>
                            <div className="form-group">
                                <label>Location (Required)</label>
                                <TextFieldGroup
                                    name="location"
                                    value={this.state.location}
                                    onChange={this.onChange}

                                    info="Enter a date in this format (10th November 2018, 2nd Week of August)" />
                            </div>
                            <div className="form-group">
                                <label>Start Date (Required)</label>
                                <TextFieldGroup
                                    name="startDate"
                                    value={this.state.startDate}
                                    onChange={this.onChange}

                                    info="Enter a date in this format (10th November 2018, 2nd Week of August)" />
                            </div>
                            <div className="form-group">
                                <label>End Date (Optional)</label>
                                <TextFieldGroup
                                    name="endDate"
                                    value={this.state.endDate}
                                    onChange={this.onChange}

                                    info="Enter a date in this format (10th November 2018, 2nd Week of August)" />
                            </div>
                            <div className="form-group">
                                <label>Time (Required)</label>
                                <TextFieldGroup
                                    name="time"
                                    value={this.state.time}
                                    onChange={this.onChange}

                                    info="Event time in this format (9am, 2:30pm - 5pm)" />
                            </div>

                            <div className="form-group">
                                <label>Description</label>
                                <TextAreaFieldGroup
                                    name="description"
                                    value={this.state.description}
                                    onChange={this.onChange}

                                    info="A short description about the event. Description must be between 20 to 50 characters" />
                            </div>

                            <div className="form-group">
                                <label>Event Information</label>
                                <TextAreaFieldGroup
                                    name="info"
                                    value={this.state.info}
                                    onChange={this.onChange}

                                    info="A long description about the event. Description must be between 50 to 500 characters" />
                            </div>

                            <input type="file" onChange={this.upload} />
                            <br></br>
                            <br></br>
                            <br></br>


                            <button className="btn btn-primary" onClick={this.onSubmit}>Create New Event</button>
                        </form>
                    </div>
                </div>

                <br></br>
                <br></br>
                <br></br>
                <br></br>
            </section>
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
