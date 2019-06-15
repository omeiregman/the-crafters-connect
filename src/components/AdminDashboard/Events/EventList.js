import React, { Component ,Fragment} from 'react';
import {getEvents} from '../../../actions/eventActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Button, Table} from 'antd'


class EventList extends Component {
      state={
            events:[]
      }
    componentDidMount(){
       this.props.getEvents();
       
    }
    componentWillReceiveProps(nextprops){
        this.setState({events:nextprops.events.events})
    }

    render() {
        let dataSource = [];
          const {events}=this.state;
                 try {
                    events.map(event=>{
                      dataSource.push(
                          {
                            datecreated:event.createdDate,
                            Eventname:event.name,
                            description:event.description,
                            location:event.location,
                            startdate:event.startDate,
                            action:<select key={event._id} name={event._id}>
                                <option value='delete'>None</option>
                                <option value='delete'>Delete</option>
                                <option value='edit'>Edit</option>
                            </select>
                          }
                      )
                    }) 
                 } catch (error) {
                     console.log('er')
                 }
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
