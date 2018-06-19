import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return(
    <section className="footer-section">
      <div className="container">
        <div className="row">
          <div className="col-md-3">
            <h3>Community</h3>
            <ul className="footer-items">
              <li>About Us</li>
              <li>Join a discussion</li>
              <li>Connect with crafters</li>
              <li>Refer a friend</li>
              <li>Subscriptions</li>
              <li>Free Classes</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Blog</h3>
            <ul className="footer-items">
              <li><Link to="http://www.blog.thecraftersconference.com" target="_blank">TCC Blog</Link></li>
              <li>iReport Bucket</li>
              <li>Recent Stories</li>
              <li>Upcoming Events</li>
              <li>Top Stories</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Collaborators</h3>
            <ul className="footer-items">
              <li>Invest with us</li>
              <li>Invite us for a tour</li>
              <li>Advertise</li>
              <li>Hire a crafter</li>
              <li>Get hired</li>
            </ul>
          </div>
          <div className="col-md-3">
            <h3>Social Media</h3>
            <ul className="footer-items">
              <li>Facebook</li>
              <li>Instagram</li>
              <li>Twitter</li>
              <li>Youtube</li>
            </ul>
          </div>
        </div>
        <br/>
        <div className="copyright">
          The Crafters Connect | &copy; 2018
        </div>
        <br/>
        <br/>
      </div>
    </section>
  );
}

export default Footer;
