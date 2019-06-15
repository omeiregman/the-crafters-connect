import React, { Component ,Fragment} from 'react';
import {getEvents} from '../../../actions/eventActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Table} from 'antd'


class EventList extends Component {

    componentDidMount(){
       this.props.getEvents();
       
    }
    render() {

          
          
        const dataSource = [
           
            {
                key: '154',
                datecreated: 'Mike',
                age: 32,
                address: '10 Downing Street',
              },
          /*    {
                key: '243',
                dataIndex: 'John',
                age: 42,
                address: '10 Downing Street',
              },
            {
                key: '144',
                name: 'Mike',
                age: 32,
                address: '10 Downing Street',
              },
              {
                key: '23',
                name: 'John',
                age: 42,
                address: '10 Downing Street',
              },
            {
              key: '1',
              name: 'Mike',
              age: 32,
              address: '10 Downing Street',
            },
            {
              key: '2',
              name: 'John',
              age: 42,
              address: '10 Downing Street',
            },*/
          ];
          const columns = [
            {
                title: 'Date Created',
                 dataIndex: 'datecreated',
                 key: 'datecreated',
               },
            {
              title: 'Event Name',
              dataIndex: 'Eventname',
              key: 'Eventname',
            },

            {
              title: 'Event Description',
              dataIndex: 'description',
              key: 'description',
            },
            {
              title: 'Event Location',
              dataIndex: 'location',
              key: 'location',
            },
            {
                title: 'Event Date',
                dataIndex: 'startdate',
                key: 'startdate',
              },

              {
                title: 'Action',
                dataIndex: 'action',
                key: 'action',
              },
          ];
     /*     name(pin): "The Crafters Conference"
description(pin): "An annual event for crafters"
location(pin): "Lagos"
startDate(pin): "38th Week of 2018"
time(pin): "9am"*/

        return (
            <div>
                <div>Event List</div>
                <Table dataSource={dataSource} columns={columns} />
            </div>
        );
    }
}
EventList.propTypes={
    events:PropTypes.object.isRequired,
    getEvents:PropTypes.func.isRequired
}
const mapStateToProps =(state)=>({
events:state.events
})
export default connect(mapStateToProps,{getEvents})(EventList);
