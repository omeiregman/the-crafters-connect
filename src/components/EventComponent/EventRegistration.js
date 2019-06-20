import React, { Component, Fragment } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import './css/event-registration.css';

class EventRegistration extends Component {
    state = {
        name: "",
        email: "",
        phone: "",
        address: "",
        gender: "",
        craft: "",
        comment: ""
    }
    onChange = (e) => {
        this.setState({ [e.target.name]: e.target.value })
    }

    render() {
        return (
            <Fragment>
                <div className="center">
                    <div className="card form-card event-registration-card">
                        <div className='card-header modal-card-head'>
                            <p>{this.props.name}</p>
                        </div>
                        <div className='card-body modal-card-body'>
                            <form onSubmit={this.props.onSubmit(this.state)} >
                                <TextFieldGroup onChange={this.onChange} name="name" type="text" placeholder="Name" value={this.state.name} />
                                <br />
                                <TextFieldGroup onChange={this.onChange} name="phone" type="text" placeholder="Phone" value={this.state.phone} />
                                <br />
                                <TextFieldGroup onChange={this.onChange} name="email" type="email" placeholder="Email" value={this.state.email} />
                                <br />
                                <TextFieldGroup onChange={this.onChange} name="address" type="text" placeholder="Address" value={this.state.address} />
                                <br />
                                <button type="submit" className="btn btn-custom btn-block">Register</button>
                            </form>
                        </div>
                    </div>
                </div>

                <span onClick={this.props.onClick} className="cross">x</span>
                <div className="modal-form">
                </div>
            </Fragment>
        )
    }
}

export default EventRegistration;
