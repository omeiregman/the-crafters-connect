import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link} from 'react-router-dom';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

import './css/auth.css';
import img_logo from './img/logo.png';

class CrafterRegistration extends Component {
  constructor(props){
    super(props);


    this.state = {
        displaySocialInputs: false,
        handle: '',
        company: '',
        website: '',
        location: '',
        majorCraft: '',
        otherCrafts: '',
        bio: '',
        youtube: '',
        twitter: '',
        instagram: '',
        facebook: '',
        linkedin: '',
        errors: {}
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }

  onSubmit(e) {
    e.prevent.default();
    console.log("Submit");
  }



  render () {
    const { errors } = this.state;
    const options = [
      { label: 'Select Major Craft', value: 0 },
      { label: 'Bag Crafter', value: 1},
      { label: 'Paper Crafter', value: 2},
      { label: 'Body Art Crafter', value: 3},
      { label: 'Nail Crafter', value: 4},
      { label: 'Face Artist', value: 5},
      { label: 'Food Artist', value: 6},
      { label: 'Rubber Maker', value: 7},
      { label: 'Leather Twister', value: 8}
    ]
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
                      <TextFieldGroup
                      name="handle"
                      value={this.state.handle}
                      onChange={this.onChange}
                      error={errors.handle}
                      info="A unique handle for your crafters profile, handle must be between 6 to 10 characters,
                      handle can contain alphabets and numbers. (This CAN'T be changed later)"/>
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
                      <SelectListGroup
                      name="majorCraft"
                      id="exampleFormControlSelect1"
                      placeholder="Major Craft"
                      value={this.state.majorCraft}
                      onChange={this.onChange}
                      options={options}
                      error={errors.majorCraft}
                      />
                    </div>
                    <div className="col">
                      <p>other crafts</p>
                      <TextAreaFieldGroup
                        name="otherCrafts"
                        value={this.state.otherCrafts}
                        onChange={this.onChange}
                        error={errors.otherCrafts}

                        />
                    </div>
                  </div>
                  <hr></hr>
                  <p>bio</p>
                  <TextAreaFieldGroup
                    name="bio"
                    value={this.state.bio}
                    onChange={this.onChange}
                    errors={errors.bio}
                    info="A short bio of yourself, should not be more than 200 characters"
                    />
                  <hr></hr>
                  {/* Experience */}
                  <p>Add Experience Here</p>
                  <hr></hr>
                  <p>Social Media handles</p>
                  <div className="form-row">
                    <div className="col">
                      <p>instagram</p>
                      <InputGroup
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        errors={errors.facebook}/>
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

CrafterRegistration.propTypes = {
  crafter: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  crafter: state.crafter,
  errors: state.errors
});

export default connect (mapStateToProps)(CrafterRegistration);
