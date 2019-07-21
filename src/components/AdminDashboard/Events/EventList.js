import React, { Component ,Fragment} from 'react';
import {getEvents,deleteEvent} from '../../../actions/adminActions';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';
import { Modal, Table} from 'antd'


class EventList extends Component {
      state={
            events:[],
            eventName:'',
            eventId:'',
            modalVisible:false,
            ModalText:''
            
      }
    componentDidMount(){
       this.props.getEvents();
       
    }
    componentWillReceiveProps(nextprops){
        this.setState( {events:nextprops.events.events,ModalText:nextprops.events['deleted']} );
      
        setTimeout(()=>{
            this.setState({loading:false,modalVisible:false})
          },2000)
    }
    
   
    eventAction=(e)=>{
      console.log(e.target.value," ",e.target.name,e.target.name);
     if(e.target.value=='none'){
        this.setState({
            eventName:'',
            eventId:'',
            ModalText: '',
            modalVisible:false
           }) 
      }
     else if(e.target.value=='delete'){
         this.setState({
             eventName:e.target.name.split('/')[0] +' '+ 'Event',
             eventId:e.target.name.split('/')[1],
             ModalText: `are you sure you want to delete this event ?`,
             modalVisible:true
            }) 
      }else if(e.target.value=='edit'){

      }

      else{}
    }
    consfirmDeleteEvent=()=>{
        this.setState({loading:true});
        this.props.deleteEvent(this.state.eventId);
        console.log(this.state.eventId)
    }
    handleCancel=()=>{
        this.setState({modalVisible:false})
    }

    render() {
        const deleteEventModal=(
            <Modal
            title={`Delete ${this.state.eventName}`}
            visible={this.state.modalVisible}
            onOk={this.consfirmDeleteEvent}
            confirmLoading={this.state.loading}
            onCancel={this.handleCancel}
          >
            <p>{this.state.ModalText}</p>
          </Modal>
        )

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
                           
                            action:<select key={event._id} onChange={this.eventAction} name={event.name+'/'+event._id}>
                                 <option value="none">None</option>
                                <option value='delete'>Delete</option>
                                <option value='edit'>Edit</option>
                                
                            </select>,
                            key:event._id
                          }
                      )
                    }) 
                 } catch (error) {
                     //console.log('er')
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
                {deleteEventModal}
            </div>
        );
    }
}
EventList.propTypes={
    events:PropTypes.object.isRequired,
    getEvents:PropTypes.func.isRequired,
    deleteEvent:PropTypes.func.isRequired
}
const mapStateToProps =(state)=>({
events:state.admin
})
export default connect(mapStateToProps,{getEvents,deleteEvent})(EventList);
