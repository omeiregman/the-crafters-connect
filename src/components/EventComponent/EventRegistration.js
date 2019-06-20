import React, { Component, Fragment } from 'react';
import TextFieldGroup from '../common/TextFieldGroup';
import './css/event-registration.css';
import { PulseLoader } from 'react-spinners';

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
        let RegisterationForm;
        if(this.props.registerationAction.submited &&this.props.registerationAction.registerLoading){
           RegisterationForm=(
           <div className='event-register-action'>
           <PulseLoader color="orange"/>
           <p>Submitting ...</p>
           </div>
            )
        } if(this.props.registerationAction.registrationForm){
            RegisterationForm=(<form onSubmit={this.props.onSubmit(this.state)} >
            <TextFieldGroup require={true} onChange={this.onChange} name="name" type="text" placeholder="Name" value={this.state.name} />
            <br />
            <TextFieldGroup require={true} onChange={this.onChange} name="phone" type="text" placeholder="Phone" value={this.state.phone} />
            <br />
            <TextFieldGroup require={true} onChange={this.onChange} name="email" type="email" placeholder="Email" value={this.state.email} />
            <br />
            <TextFieldGroup require={true} onChange={this.onChange} name="address" type="text" placeholder="Address" value={this.state.address} />
            <br />
            <button type="submit" className="btn btn-custom btn-block">Register</button>
        </form>);
        }
            if(this.props.registerationAction.submited &&!this.props.registerationAction.registerLoading){
                RegisterationForm=(
                    <div className='event-register-action era-message'>
                      {this.props.registerationAction.registerationMessage}
                      <p><button onClick={this.props.onClick} className="btn btn-custom">Close</button></p>
                    </div>
                );
            }
        
        return (
            <Fragment>
                <div className="center">
                    <div className="card form-card event-registration-card">
                        <div className='card-header modal-card-head'>
                            <p>{this.props.name}</p>
                            <span onClick={this.props.onClick} className="cross">x</span>
                        </div>
                        <div className='card-body modal-card-body'>
                            {RegisterationForm}
                        </div>
                    </div>
                </div>

               
                <div className="modal-form">
                </div>
            </Fragment>
        )
    }
}

export default EventRegistration;
