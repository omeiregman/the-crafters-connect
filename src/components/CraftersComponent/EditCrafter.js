import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { createCrafter, getCurrentCrafter } from '../../actions/crafterActions';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';

import './css/regcrafter.css';
import img_logo from './img/logo.png';
import isEmpty from './../../validation/is-empty';


class CrafterRegistration extends Component {
  constructor(props){
    super(props);


    this.state = {
        loading: false,
        status: 'crafter',
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
    e.preventDefault();
    this.setState({ loading: true });
    let crafterData = {
     handle: this.state.handle,
     company: this.state.company,
     website: this.state.website,
     location: this.state.location,
     status: this.state.majorCraft,
     crafts: this.state.otherCrafts,
     youtube: this.state.youtube,
     twitter: this.state.twitter,
     instagram: this.state.instagram,
     facebook: this.state.facebook
    }
    
    this.props.createCrafter(crafterData, this.props.history);
    console.log(crafterData);
  }

  componentDidMount() {
      this.props.getCurrentCrafter();
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ 
        errors: nextProps.errors,
        loading: false
      });
    }

    if(nextProps.crafter.crafter) {
        const crafter = nextProps.crafter.crafter;

        //Convery skills array back to string 

        const skillscSV = crafter.skills.join(',');

        //If crafter field doesnt exist, make empty string
        crafter.company = !isEmpty(crafter) ? crafter.company : '';
        crafter.website = !isEmpty(crafter) ? crafter.website : '';
        crafter.bio = !isEmpty(crafter) ? crafter.bio : '';
        crafter.status = !isEmpty(crafter) ? crafter.status : '';
        crafter.youtube = !isEmpty(crafter) ? crafter.youtube : '';
        crafter.facebook = !isEmpty(crafter) ? crafter.facebook : '';
        crafter.twitter = !isEmpty(crafter) ? crafter.twitter : '';
        crafter.instagram = !isEmpty(crafter) ? crafter.instagram : '';
    }
  }




  render () {
    const { errors } = this.state;
    const options = [
      { label: 'Select Major Craft' },
      { label: 'Bag Crafter', value: 'Bag Crafter'},
      { label: 'Paper Crafter', value: 'Paper Crafter'},
      { label: 'Body Art Crafter', value: 'Body Art Crafter'},
      { label: 'Nail Crafter', value: 'Nail Crafter'},
      { label: 'Face Artist', value: 'Face Artist'},
      { label: 'Food Artist', value: 'Food Artist'},
      { label: 'Rubber Maker', value: 'Rubber Maker'},
      { label: 'Leather Twister', value: 'Leather Twister'}
    ]

    return (
      <section className="">
       <div className="row">
          <div className="login-pane">
            <div className="col-sm-12">
              <div className="right-pane">
                <h3>Edit Crafter Profile</h3>
                <p>or go back to <Link to='/crafters/dashboard'>Dashboard</Link></p>
                <br></br>

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
                      <TextFieldGroup
                      name="location"
                      value={this.state.location}
                      onChange={this.onChange}
                      error={errors.location}/>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col">
                      <p>company</p>
                      <TextFieldGroup
                      name="company"
                      value={this.state.company}
                      onChange={this.onChange}
                      error={errors.company}/>
                    </div>

                    <div className="col">
                      <p>website</p>
                      <TextFieldGroup
                      name="website"
                      value={this.state.website}
                      onChange={this.onChange}
                      error={errors.website}/>
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
                      error={errors.craftSet}
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

                  {/*Social Media accounts*/}
                  <p>Social Media handles</p>
                  <div className="form-row">
                    <div className="col">
                      <p>instagram</p>
                      <InputGroup
                        name="instagram"
                        icon="fab fa-instagram"
                        value={this.state.instagram}
                        onChange={this.onChange}
                        errors={errors.instagram}/>
                    </div>

                    <div className="col">
                      <p>twitter</p>
                      <InputGroup
                        name="twitter"
                        icon="fab fa-twitter"
                        value={this.state.twitter}
                        onChange={this.onChange}
                        errors={errors.twitter}/>
                    </div>
                  </div>

                  <div className="form-row">
                    <div className="col">
                      <p>facebook</p>
                      <InputGroup
                        name="facebook"
                        icon="fab fa-facebook"
                        value={this.state.facebook}
                        onChange={this.onChange}
                        errors={errors.facebook}/>
                    </div>

                    <div className="col">
                      <p>youtube</p>
                      <InputGroup
                        name="youtube"
                        icon="fab fa-youtube"
                        value={this.state.youtube}
                        onChange={this.onChange}
                        errors={errors.youtube}/>
                    </div>
                  </div>
                <br></br>
                <div>
                  <BarLoader
                    color={'#FBB062'}
                    loading={this.state.loading}
                    width={225}
                  />
                </div>
                <input type="submit" value="Update"/>
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
  createCrafter: PropTypes.func.isRequired,
  getCurrentCrafter: PropTypes.func.isRequired,
  crafter: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
  crafter: state.crafter,
  errors: state.errors
});

export default connect (mapStateToProps, { createCrafter, getCurrentCrafter })(withRouter(CrafterRegistration));
