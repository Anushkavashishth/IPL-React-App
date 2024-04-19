// import * as React from "react";
// import { Form as AntdForm, Button } from "antd";
// import { Form, InputField } from "rjv-react-antd";

// type Props = {
//   data: any;
//   onSuccess: (data: any) => void;
// };

// const Step1Form=()=> ({ data, onSuccess }) {
//   return (
//     <Form
//       onSuccess={onSuccess}
//       data={data}
//       autoComplete="off"
//       layout="horizontal"
//     >
//       <InputField
//         path="first"
//         schema={{ default: "", presence: true }}
//         label="First Name"
//       />
//       <InputField
//         path="last"
//         schema={{ default: "", presence: true }}
//         label="Last Name"
//       />

//       <AntdForm.Item>
//         <Button type="primary" htmlType="submit">
//           Next
//         </Button>
//       </AntdForm.Item>
//     </Form>
//   );
// }
// export default Step1Form

// import { Form, Input, Button } from "antd";
// const StepForm1 = ({ form, back, next, payload }) => {
//   function showNextForm(values) {
//     payload.current.data = { ...payload.current.data, ...values };
//     // console.log("payload", payload);
//     next();
//   }
//   return (
//     <>
//       <h1>Step Form 1</h1>
//       <Form name="basic"
//         labelCol={{span: 8,}}
//         wrapperCol={{span: 16,}}
//         style={{ maxWidth: 600, }}
//         onFinish={showNextForm} form={form} autoComplete="off">
//         <Form.Item
//           label="Event Name"  name="eventName" 
//             rules={[
//             {
//               required: true, message: "Please input event name!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>
//         <Form.Item  label="Event Duration" name="Duration"
//           rules={[
//             {
//               required: true, message: "Please input your password!",
//             },
//           ]}
//         >
//           <Input />
//         </Form.Item>

//         <Form.Item>
//           <Button type="primary" onClick={back}>
//             Cancel
//           </Button>
//           <Button type="primary" htmlType="submit">
//             Next
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };
// export default StepForm1;
import {
  AutoComplete,
  Button,
  Checkbox,
  Col,
  Form,
  Input,
  InputNumber,
  Row,
  Select,
  DatePicker,
  Upload,
} from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import { addTeam, addteam, updateTeam, updateteam } from "../../../services/teams/teams"
import React, { useState } from 'react';
import { Modal } from 'antd';

const normFile = (e) => {
  if (Array.isArray(e)) {
    return e;
  }
  return e?.fileList;
};
const formItemLayout = {
  labelCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 8,
    },
  },
  wrapperCol: {
    xs: {
      span: 24,
    },
    sm: {
      span: 16,
    },
  },
};
const tailFormItemLayout = {
  wrapperCol: {
    xs: {
      span: 24,
      offset: 0,
    },
    sm: {
      span: 16,
      offset: 8,
    },
  },
};

const { Option } = Select;
const StepForm1 = ({payload, form, teamUpdated, handleCancel}) => {
  const submitForm = (values)=>{
    payload.current.data = {...payload.current.data, ...values}
    if(payload.current.operation === 'ADD'){
      payload.current.data.playerId = Math.random()
      console.log(payload.current)
      addTeam(payload.current.data).then(()=>teamUpdated())
    }
    else {
      updateTeam(payload.current.data, 'playerId').then(()=>teamUpdated())
    }
  }

  const { YearPicker } = DatePicker;
  
  
  return (
    <>
      <Modal
        title="Title"
        open={true}
       // onOk={handleOk}
        //confirmLoading={confirmLoading}
        onCancel={handleCancel}
      >
        <Form
          {...formItemLayout}
          form={form}
          name="register"
          onFinish={submitForm}
          style={{
            maxWidth: 600,
          }}
          scrollToFirstError
        >
          <Form.Item
            name="name"
            label="Player Name"
            rules={[
              {
                required: true,
                message: 'Please input your Name!',
              },
            ]}
          >
            <Input />

          </Form.Item>

          <Form.Item label="Date Of Birth">
            <DatePicker />
          </Form.Item>

          <Form.Item
            name="specialization"
            label="Specialization"
            rules={[
              {
                required: true,
                message: 'Please select Specialization!',
              },
            ]}
          >
            <Select placeholder="select your Specialization">
              <Option value="Bowler">Bowler</Option>
              <Option value="Batter">Batter</Option>
              <Option value="All-Rounder">All-Rounder</Option>
            </Select>
          </Form.Item>

          <Form.Item label="Debut Year">
            <YearPicker picker='year' />
          </Form.Item>

          <Form.Item
            name="Innings"
            label="Innings"
            rules={[
              {
                required: true,
                message: 'Please input player innings!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Runs"
            label="Runs"
            rules={[
              {
                required: true,
                message: 'Please input player Runs!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Batting Strike Rate"
            label="Batting Strike Rate"
            rules={[
              {
                required: true,
                message: 'Please input player Batting Strike Rate!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Bowling Strike Rate"
            label="Bowling Strike Rate"
            rules={[
              {
                required: true,
                message: 'Please input player Bowling Strike Rate!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Batting Average"
            label="Batting Average"
            rules={[
              {
                required: true,
                message: 'Please input player Batting Average!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Bowling Average"
            label="Bowling Average"
            rules={[
              {
                required: true,
                message: 'Please input player Bowling Averagee!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Economy"
            label="Economy"
            rules={[
              {
                required: true,
                message: 'Please input player Economy!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>

          <Form.Item
            name="Wickets"
            label="Wickets"
            rules={[
              {
                required: true,
                message: 'Please input player Wickets!',
              },
            ]}
          >
            <InputNumber

              style={{
                width: '50%',
              }}
            />
          </Form.Item>


          <Form.Item label="Player Photo" valuePropName="fileList" getValueFromEvent={normFile}>
            <Upload action="/upload.do" listType="picture-card">
              <button
                style={{
                  border: 0,
                  background: 'none',
                }}
                type="button"
              >
                <PlusOutlined />
                <div
                  style={{
                    marginTop: 8,
                  }}
                >
                  Upload
                </div>
              </button>
            </Upload>
          </Form.Item>

          <Form.Item {...tailFormItemLayout}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </Modal>

    </>
  )
}
export default StepForm1
