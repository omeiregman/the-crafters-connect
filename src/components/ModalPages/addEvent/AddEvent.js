import React, { Component } from 'react'
import { Input, Modal, Row, ModalText, Button } from 'antd';


export default class addEvent extends Component {
    state = {
        ModalText: 'Content of the modal',
        visible: this.props.visible,
        confirmLoading: false,
      };
    

    
      handleOk = () => {
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
    
      handleCancel = () => {
        console.log('Clicked cancel button');
        this.setState({
          visible: false,
        });
      };

    render() {
        return (
      
 
        <Modal
          title="Title"
          visible={}
          onOk={this.handleOk}
          confirmLoading={this.confirmLoading}
          onCancel={this.handleCancel}
        >
          <p>hello</p>
        </Modal>
      
        )
    }
}
/*

<Row gutter={20}>

                    <Col className="gutter-row" span={10}>
                        <Input
                            name="name"
                            placeholder="Event Name"
                            value={this.state.name}
                            onChange={this.onInputChange}
                        />
                    </Col>

                    <Col className="gutter-row" span={11}>
                        <Input
                            name="description"
                            placeholder="Short Event Description"
                            value={this.state.description}
                            onChange={this.onInputChange}
                        />
                    </Col>

                </Row>
                <br></br>
                <Row>
                    <Col className="gutter-row" span={3}>
                        <DatePicker
                            disabledDate={this.disabledStartDate}
                            format="YYYY-MM-DD"
                            value={startValue}
                            placeholder="Start Date"
                            onChange={this.onStartChange}
                            onOpenChange={this.handleStartOpenChange}
                        />
                    </Col>
                    <Col className="gutter-row" span={3}>
                        <DatePicker
                            disabledDate={this.disabledEndDate}
                            format="YYYY-MM-DD"
                            value={endValue}
                            placeholder="End Date"
                            onChange={this.onEndChange}
                            open={endOpen}
                            onOpenChange={this.handleEndOpenChange}
                        />
                    </Col >
                    <Col className="gutter-row" span={8}>
                        <Input
                            name="time"
                            placeholder="Event Time"
                            value={this.state.time}
                            onChange={this.onInputChange}
                        />
                    </Col>
                    <Col className="gutter-row" span={8}>
                        <Input
                            name="location"
                            placeholder="Event Loaction"
                            value={this.state.location}
                            onChange={this.onInputChange}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row gutter={22}>
                    <Col className="gutter-row" span={24}>
                        <Input.TextArea
                            name="info"
                            placeholder="Detailed information about event"
                            value={this.state.info}
                            onChange={this.onInputChange}
                            autosize={{ minRows: 4 }}
                        />
                    </Col>
                </Row>
                <br></br>
                <Row gutter={24}>

                    <Col className="gutter-row" span={12}>
                        <Input
                            name="banner"
                            placeholder="Event Banner URL (Large)"
                            value={this.state.banner}
                            onChange={this.onInputChange}
                        />
                    </Col>

                    <Col className="gutter-row" span={12}>
                        <Input
                            name="thumbnail"
                            placeholder="Event Thumbnail URL (Small)"
                            value={this.state.thumbnail}
                            onChange={this.onInputChange}
                        />
                    </Col>

                </Row>
                <br></br>
                <Row>
                    Does this event require users to register?
                </Row>
*/