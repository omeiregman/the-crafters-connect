import React from 'react'

 const SingleEventHeader=({data,button})=> {
    return (
        <div className="container hcont">
          <div className="row single-event-header-row">
             <div className="col-md-8 col-sm-8  single-eventheader-column">
               <img className="event-header-img" src={data.eventImage}/>
             </div>
             <div className="col-md-4 col-sm-4  single-event-header-text">
                 <div className="single-header-data">
                <h4>{data.name}</h4>
                <h6>{data.startDate}</h6>
                <p>{data.time}</p>
                <aside><i className="material-icons">location_on</i>{data.location}</aside>
                 {data.registration?<p><br/>{button}</p>:("")}
                 </div>
             </div>
          </div>
        </div>
      
    )
}
export default SingleEventHeader;