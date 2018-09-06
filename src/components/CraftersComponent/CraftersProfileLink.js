import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
//import {Link } from 'react-router-dom';
import { getCrafterFromHandle } from './../../actions/crafterActions';

import CrafterHeader from './CrafterHeader';


class CraftersProfileLink extends Component {

    componentWillMount() {

        const crafterUrl = this.props.match.params.handle;
        //getCrafterFromHandle(crafterUrl);
    }
    
    
    render() {
        return(
            <section>
                <CrafterHeader/>
                <div className="container">
                    
                </div>
            </section>
        );
    }
}


CraftersProfileLink.propTypes = {
  
    
  }

const mapStateToProps = state => ({
    
  });


export default connect (null, { getCrafterFromHandle })(CraftersProfileLink);