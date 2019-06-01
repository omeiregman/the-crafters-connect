import React from 'react';
import TextFieldGroup from '../../common/TextFieldGroup'

const Confrenceform=(Onchange, onSubmit, {...state})=>{
    return(
        {/*<div className="container">
           <div className="row">
             <div className="col-md-12">
                <div className="card confrence-card">
                <h2>Confrence Form</h2>
                <form onSubmit={this.onSubmit} >
                   <TextFieldGroup onChange={this.onChange} style={{"width":"100%"}} name="name" type="text" placeholder="Name" value={state.name}/>
                   <br/>
                   <TextFieldGroup onChange={this.onChange} style={{"width":"100%"}} name="email" type="email" placeholder="Email" value={state.email}/>
                   
                   <br/>
                   <TextFieldGroup onChange={this.onChange} style={{"width":"100%"}} name="address" type="text" placeholder="Address" value={state.address}/>
                   <button className="btn btn-warning">Register</button>
                </form>
                </div>
             </div>
           </div>
    </div>*/}

    
    )
}

export default Confrenceform;

/**
 * 
 *         name:"",
        email:"",
        phone:"",
        address:"",
        gender:"",
        craft:"",
        comment:""
 *  name,
  placeholder,
  value,
  label,
  error,
  info,
  type,
  onChange,
  disabled
 */