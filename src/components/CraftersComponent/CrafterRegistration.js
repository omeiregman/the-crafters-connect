import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import {Link, withRouter } from 'react-router-dom';
import { BarLoader } from 'react-spinners';
import { createCrafter } from '../../actions/crafterActions';

import TextFieldGroup from '../common/TextFieldGroup';
import TextAreaFieldGroup from '../common/TextAreaFieldGroup';
import InputGroup from '../common/InputGroup';
import SelectListGroup from '../common/SelectListGroup';
import CrafterHeader from './CrafterHeader';

import './css/regcrafter.css';

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
        otherCraftsSelect: [],
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

  onOtherCraftChange = (e) => {
    let changeArr = this.state.otherCraftsSelect;
    changeArr.push(e.target.value);
    this.setState({
      otherCraftSelect: changeArr
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
     crafts: this.state.otherCraftsSelect.join(","),
     bio: this.state.bio,
     youtube: this.state.youtube,
     twitter: this.state.twitter,
     instagram: this.state.instagram,
     facebook: this.state.facebook
    }
    
    //this.props.createCrafter(crafterData, this.props.history);
    console.log(crafterData);
  }

  componentWillReceiveProps(nextProps) {
    if(nextProps.errors) {
      this.setState({ 
        errors: nextProps.errors,
        loading: false
      });
    }
  }




  render () {
    
    const { errors } = this.state;

    let otherCrafts = this.state.otherCraftsSelect;

    const otherCraftList = otherCrafts.map(craft => {
     return <p key={craft}>{craft}<span>x</span></p>
    });

       const options = [
      { label: 'Select Craft' },
      { label: 'Paper Crafts', value: 'Paper Crafts'},
      { label: 'Nail Crafts', value: 'Nail Crafts'},
      { label: 'Hair Crafts', value: 'Hair Crafts'},
      { label: 'Fabric Crafts', value: 'Fabric Crafts'},
      { label: 'Bamboo Crafts', value: 'Bamboo Crafts'},
      { label: 'Plastic Crafts', value: 'Plastic Crafts'},
      { label: 'Wood Crafts', value: 'Wood Crafts'},
      { label: 'Cane Crafts', value: 'Cane Crafts'},
      { label: 'Metal Crafts', value: 'Metal Crafts'},
      { label: 'Food Crafts', value: 'Food Crafts'},
      { label: 'Fruit Crafts', value: 'Fruit Crafts'},
      { label: 'Drink Crafts', value: 'Drink Crafts'},
      { label: 'Cake Crafts', value: 'Cake Crafts'},
      { label: 'General Arts', value: 'General Arts'},
      { label: 'Visual Arts', value: 'Visual Arts'},
      { label: 'Body Arts', value: 'Body Arts'},
      { label: 'Pottery', value: 'Pottery'},
      { label: 'Calligraphy', value: 'Calligraphy'},
      { label: 'Knitting', value: 'Crocheting'},
      { label: 'Other', value: 'Other'},
    ]

    return (
      <section className="">
      <CrafterHeader/>
       <div className="container">
          <div className="registration-pane">
            <div className="col-sm-12">
              <div className="right-pane">
                <h3>Register as a Crafter</h3>
                <p>or go back to <Link to='/craftersandcrafts'>crafters page</Link></p>
                <br></br>
                <h4>Create your Crafters profile</h4>
                

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
                      error={errors.status}
                      />
                    </div>
                    <div className="col">
                      <p>other crafts you practice</p>
                      <div>
                        {otherCraftList}
                      </div>
                      <SelectListGroup
                      name="otherCraftSelect"
                      id="exampleFormControlSelect1"
                      value={this.state.otherCraftSelect}
                      onChange={this.onOtherCraftChange}
                      options={options}
                      error={errors.status}
                      />
                      {/**<TextAreaFieldGroup
                        name="otherCrafts"
                        value={this.state.otherCrafts}
                        onChange={this.onChange}
                        error={errors.crafts}
                        info="List of other crafts seperated by a comma (,)"
                      />**/}

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

export default connect (mapStateToProps, { createCrafter })(withRouter(CrafterRegistration));
