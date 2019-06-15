import React, { Component } from 'react';
import AddEventModal from './AddEventModal';

import { Input, Row, Col, DatePicker, Button ,Modal} from 'antd';


class AddEvent extends Component {
    constructor(props) {
        super(props);

        this.state = {
            visible:false,
            confirmLoading:false
        }

    }

 
    showModal = () => {
        this.setState({
          visible: true,
        });
      };
    handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };

      onSubmit = (data) => {
          console.log(data);
        this.setState({
          ModalText: 'The modal will be closed after two seconds',
          confirmLoading: true,
        });
        setTimeout(() => {
          this.setState({
            visible: false,
            confirmLoading: false,
          });
        }, 2000);
      };


    render() {
        const { startValue, endValue, endOpen } = this.state;
        return (
            <section> 
                <br></br>
                <Row>
                    <Col className="gutter-row" span={4}>
                        <Button type="primary" style={{ width: 300 }} onClick={this.showModal}>
                            Add New Event
                        </Button>
                    </Col>
                </Row>
         <AddEventModal 
            confirmLoading={this.state.confirmLoading}
            onSubmit={(data)=>this.onSubmit(data)} 
            handleCancel={this.handleCancel} 
            visible={this.state.visible}
            ModalText={this.state.ModalText}
            startValue={this.state.startValue}
            endValue = {this.state.endValue}
            endOpen = {this.state.endOpen}
          />

            </section>
        )
    }
}

export default AddEvent;
