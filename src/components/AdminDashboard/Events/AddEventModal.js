import React, { Component } from 'react'
import { Input,Form, Modal, Row, Radio, Col,DatePicker, Icon } from 'antd';


 class AddEventModal extends Component {
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
        console.log(this.props);
    };
    onSubmit=(e)=>{
        e.preventDefault();
        this.props.form.validateFields((err, values) => {
          if (!err) {
            //console.log('Received values of form: ', values);
            this.props.onSubmit(values)
          }
        });
    }
   


    render() {
        const { getFieldDecorator } = this.props.form;
        return (
        <Modal
          title="New Event"
          visible={this.props.visible}
          onOk={this.onSubmit}
          confirmLoading={this.props.confirmLoading}
          onCancel={this.props.handleCancel}
          destroyOnClose={true}
          maskClosable={false}
         style={{top:10}}
        
        >
        <Form className="login-form">
         <Row gutter={20}>
            <Col className="gutter-row" span={12}>
               
                <Form.Item>
                    {getFieldDecorator('name', {
                    rules: [{ required: true, message: 'Please Enter the Event Name!' }],
                      })(
                        <Input
                        name="name"
                        placeholder="Event Name"
                        onChange={this.onInputChange} 
                    />,
                    )}
                </Form.Item>
            </Col>

            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('description', {
                    rules: [{ required: true, message: 'Please Enter the Event Description!' }],
                      })(
                        <Input
                        name="description"
                        placeholder="Short Event Description"
                        onChange={this.onInputChange}
                    />,
                    )}
                </Form.Item>
            </Col>

            </Row>
                        
            <Row gutter={20}>
            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('time', {
                    rules: [{ required: true, message: 'Please Enter the Event Time!' }],
                      })(
                  <Input
                    name="time"
                    placeholder="Event Time"
                    onChange={this.onInputChange}
                />,
                    )}
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('location', {
                    rules: [{ required: true, message: 'Please Enter the Event Loaction!' }],
                      })(
                        <Input
                        name="location"
                        placeholder="Event Loaction"
                        onChange={this.onInputChange}
                    />,
                    )}
                </Form.Item>
               
            </Col>
            </Row>
           
            <Row gutter={22}>
            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('startDate', {
                    rules: [{ required: true, message: 'Please Enter the Event Start Date!' }],
                      })(
                        <DatePicker
                        disabledDate={this.disabledStartDate}
                        format="YYYY-MM-DD"
                        placeholder="Start Date"
                        onChange={this.onStartChange}
                        onOpenChange={this.handleStartOpenChange}
                    />,
                    )}
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('endValue', {
                    rules: [{ required: true, message: 'Please Enter the Event End Date!' }],
                      })(
                        <DatePicker
                    disabledDate={this.disabledEndDate}
                    format="YYYY-MM-DD"
                    placeholder="End Date"
                    onChange={this.onEndChange}
                    open={this.state.endOpen}
                    onOpenChange={this.handleEndOpenChange}
                />,
                    )}
                </Form.Item>
            </Col >
            </Row>
            <Row gutter={22}>
            <Col className="gutter-row" span={24}>
            <Form.Item>
                    {getFieldDecorator('info', {
                    rules: [{ required: true, message: 'Please Enter a Detailed information about event!' }],
                      })(
                 <Input.TextArea
                    name="info"
                    placeholder="Detailed information about event"
                    onChange={this.onInputChange}
                    autosize={{ minRows: 4 }}
                />,
                    )}
                </Form.Item>
            </Col>
            </Row>
            
            <Row gutter={24}>

            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('banner', {
                    rules: [{ required: true, message: 'Please Enter the Event Banner URL (Large)!' }],
                      })(
                   <Input
                        name="banner"
                        placeholder="Event Banner URL (Large)"
                        onChange={this.onInputChange}
                    />,
                    )}
                </Form.Item>
            </Col>
            <Col className="gutter-row" span={12}>
            <Form.Item>
                    {getFieldDecorator('thumbnail', {
                    rules: [{ required: true, message: 'Please Enter the Event Thumbnail URL (Small)!' }],
                      })(
                        <Input
                        name="thumbnail"
                        placeholder="Event Thumbnail URL (Small)"
                        onChange={this.onInputChange}
                    />,
                    )}
                </Form.Item>
            </Col>
            </Row>
            <Row>
            Does this event require users to register?
           <span> 
           <Form.Item>
                    {getFieldDecorator('queryRegister', {
                    rules: [{  required: true, message: 'Please answer the question Above' }],
                      })(
                        <Radio.Group name="queryRegister" value='yes' onChange={this.onInputChange} >
                        <Radio value='yes' checked>Yes</Radio>
                        <Radio value='no'>No</Radio>
                       </Radio.Group>,
                    )}
                </Form.Item>
              </span>
            </Row>
            </Form>
        </Modal>
      
        )
    }
}

const AddEventModalForm = Form.create({ name: 'normal_login' })(AddEventModal);

export default AddEventModalForm;
