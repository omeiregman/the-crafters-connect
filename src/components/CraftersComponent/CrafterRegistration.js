import React, { Component } from 'react';
import {Link} from 'react-router-dom';

import './css/auth.css';
import img_logo from './img/logo.png';

class CrafterRegistration extends Component {
  constructor(props){
    super(props);

    this.state = {
      isLogged: false
    }
    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange() {

  }

  onSubmit() {

  }



  render () {
    return (
      <section className="">
       <div className="row">
          <div className="login-pane">
            <div className="col-sm-12">
              <div className="right-pane">
                <h3>Sign Up as a Crafter</h3>
                <p>or go back to <Link to='/crafters'>crafters page</Link></p>
                <br></br>
                <h4>Complete your Crafters profile</h4>
                <form noValidate onSubmit={this.onSubmit}>
                  <div className="form-row">
                    <div className="col">
                      <p>username(handle)</p>
                      <input type="text" name="handle" value={this.state.handle} onChange={this.onChange}/>
                    </div>
                    <div className="col">
                      <p>location</p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <p>company</p>
                      <input type="text" />
                    </div>
                    <div className="col">
                      <p>website</p>
                      <input type="text" />
                    </div>
                  </div>
                  <hr></hr>
                  <p>crafts</p>
                  <div className="form-row">
                    <div className="col">
                      <p>major craft</p>
                      <select className="form-control" id="exampleFormControlSelect1">
                        <options>Select a craft</options>
                        <option>Bag Craft</option>
                        <option>Paper Craft</option>
                        <option>Body Art</option>
                        <option>nail Art</option>
                      </select>
                    </div>
                    <div className="col">
                      <p>other crafts</p>
                      <select multiple className="form-control" id="exampleFormControlSelect2">
                        <option>Bag Craft</option>
                        <option>Paper Craft</option>
                        <option>Body Art</option>
                        <option>nail Art</option>
                        <option>Bag Craft</option>
                        <option>Paper Craft</option>
                        <option>Body Art</option>
                        <option>nail Art</option>
                      </select>
                    </div>
                  </div>
                  <hr></hr>
                  <p>bio</p>
                  <textarea className="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
                  <hr></hr>
                  {/* Experience */}
                  <p>Add Experience Here</p>
                  <hr></hr>
                  <p>Social Media handles</p>
                  <div className="form-row">
                    <div className="col">
                      <p>instagram</p>
                      <input type="text" />
                    </div>
                    <div className="col">
                      <p>twitter</p>
                      <input type="text" />
                    </div>
                  </div>
                  <div className="form-row">
                    <div className="col">
                      <p>facebook</p>
                      <input type="text" />
                    </div>
                    <div className="col">
                      <p>youtube</p>
                      <input type="text" />
                    </div>
                  </div>
                <br></br>
                <input type="submit" value="Register"/>
                </form>
                <br></br>
              </div>
            </div>
          </div>
      </div>
   </section>
    );
  }
}

export default CrafterRegistration;
