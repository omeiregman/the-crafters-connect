import React, { Component } from 'react'
import { Input, Modal, Row, Radio, Col,DatePicker, Button } from 'antd';


export default class AddEventModal extends Component {
    state = {
        startValue: null,
        endValue: null,
        endOpen: false,
        name: '',
        startDate: '',
        endDate: '',
        url: '',
        time: '',
        description: '',
        info: '',
        location: '',
        banner: '',
        thumbnail: '',
        queryRegister:false
      };
    

    
      onInputChange=(e)=>{
        this.setState({[e.target.name]:e.target.value})
      }
    
      disabledStartDate = startValue => {
        const endValue = this.state.endValue;
        if (!startValue || !endValue) {
            return false;
        }
        return startValue.valueOf() > endValue.valueOf();
    };

    disabledEndDate = endValue => {
        const startValue = this.state.startValue;
        if (!endValue || !startValue) {
            return false;
        }
        return endValue.valueOf() <= startValue.valueOf();
    };

    onChange = (field, value) => {
        this.setState({
            [field]: value,
        });
    };

    onStartChange = value => {
        console.log("Start data val: ", value);
        this.onChange('startValue', value);
    };

    onEndChange = value => {
        this.onChange('endValue', value);
    };

    handleStartOpenChange = open => {
        if (!open) {
            this.setState({ endOpen: true });
        }
    };

    handleEndOpenChange = open => {
        this.setState({ endOpen: open });
    };



    render() {
        return (
        <Modal
          title="New Event"
          visible={this.props.visible}
          onOk={()=>this.props.onSubmit(this.state)}
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.handleCancel}
        >
         <Row gutter={20}>

            <Col className="gutter-row" span={12}>
                <Input
                    name="name"
                    placeholder="Event Name"
                    value={this.state.name}
                    onChange={this.onInputChange} 
                />
            </Col>

            <Col className="gutter-row" span={12}>
                <Input
                    name="description"
                    placeholder="Short Event Description"
                    value={this.state.description}
                    onChange={this.onInputChange}
                />
            </Col>

            </Row>
            <br></br>
            <Row gutter={22}>
            <Col className="gutter-row" span={12}>
                <DatePicker
                    disabledDate={this.disabledStartDate}
                    format="YYYY-MM-DD"
                    value={this.state.startValue}
                    placeholder="Start Date"
                    onChange={this.onStartChange}
                    onOpenChange={this.handleStartOpenChange}
                />
            </Col>
            <Col className="gutter-row" span={12}>
                <DatePicker
                    disabledDate={this.disabledEndDate}
                    format="YYYY-MM-DD"
                    value={this.state.endValue}
                    placeholder="End Date"
                    onChange={this.onEndChange}
                    open={this.state.endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />
            </Col >
            </Row>
            <br/>
            <Row gutter={20}>
            <Col className="gutter-row" span={12}>
                <Input
                    name="time"
                    placeholder="Event Time"
                    value={this.state.time}
                    onChange={this.onInputChange}
                />
            </Col>
            <Col className="gutter-row" span={12}>
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
           <span> <Radio.Group name="queryRegister" onChange={this.onInputChange} value={this.state.queryRegister}>
               <Radio value={true}>Yes</Radio>
               <Radio value={false}>No</Radio>
              </Radio.Group></span>
            </Row>
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