import React, { Component } from 'react';
import Confrenceform from './confrenceform';
import './confrence.css';

export default class Craftconfrenceregistration extends Component {
    state={
        name:"",
        email:"",
        phone:"",
        address:"",
        gender:"",
        craft:"",
        comment:""
    }
    onChange=(e)=>{
       this.setState({[e.target.name]:e.target.value})
    }
    onSubmit=()=>{

    }
    render() {
        return (
        <div className="section-about">
            <div className="about-header">
              <h2 className="page-head-hero">The Crafters Confrence</h2>
            </div>
            <div className="c-form">
                <Confrenceform onChange={this.onChange} onSubmit={this.onSubmit} {...this.state}/>
            </div>
        </div>
        )
    }
}
