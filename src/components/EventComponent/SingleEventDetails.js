import React from 'react';
import {Link} from 'react-router-dom';

 const SingleEventDetail=({data}) =>{
    return (
        <div className="container dcont">
        <div className="card">
            <div className="row sdrow">
              <div className="col-md-8">
                    <h6 className="description-sng">Description</h6>
                    <article className="detail-atc">
                        {data.info}
                    </article>
              </div>
              <div className="col-md-4">
              <h6 className="description-sng">Date and Time</h6>
               <aside>
                   <p>{data.startDate}
                     <br/>
                     {data.time}
                     <br/>
                  <Link className="dlink"  to="/">Add to Calendar</Link>
                   </p>
                  
               </aside>
               <h6 className="description-sng">Location</h6>
               <aside>
                    <p>{data.location}</p>
               </aside>
              </div>
            </div>
        </div>
        </div>
    )
}
export default SingleEventDetail