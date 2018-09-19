import React from 'react';

import './css/home.css';
import img_coming from './img/coming-soon.jpg';


const Teaser = () => {
    return(
        <section className="teaser">
            <img src={img_coming} alt="Coming soon"/>
            <p>TCC Magazine: <a href="https://www.thetccmagazine.com" target="_blank">www.thetccmagazine.com</a></p>
        </section>
    );
}

export default Teaser;