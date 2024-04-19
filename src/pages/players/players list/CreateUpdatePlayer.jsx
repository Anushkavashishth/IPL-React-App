// import React, { useRef, useState } from 'react';
// import { Button, Modal, Form } from 'antd';
// import PlayerList from './PlayersList';
// import PlayerListPage from './PlayersListPage';
// const CreateUpdatePlayer = () => {
//   const [updatedCount, setUpdatedCount] = useState(0)
//   const [open, setOpen] = useState(false);
//   const [confirmLoading, setConfirmLoading] = useState(false);
//   const [modalText, setModalText] = useState('Content of the modal');
//   const showModal = () => {
//     setOpen(true);
//   };
//   const handleOk = () => {
//     setModalText('The modal will be closed after two seconds');
//     setConfirmLoading(true);
//     setTimeout(() => {
//       setOpen(false);
//       setConfirmLoading(false);
//     }, 2000);
//   };
//   const handleCancel = () => {
//     console.log('Clicked cancel button');
//     setOpen(false);
//   };
//   const [form] = Form.useForm()
//   let payload = useRef({ //it stores data and operation 
//     operation: '',
//     data: {}
//   })
//   const initFormData = () => {
//     payload.current.data
//       ? form.setFieldValue(payload.current.data)
//       : form.resetFields()
//   }
//   return (
//     <>
//       {/* cancel={() => setUI(UI.List)}
//       form={form}
//       success={() => setUI(UI.List)}
//       payload={payload}
//       updatedCount={updatedCount}
//       setUpdatedCount={setUpdatedCount} */}
//       <PlayerList
//         payload={payload}
//         initFormData={initFormData}
//         updatedCount={updatedCount}
//         showModal={showModal}
//       />

//       {<PlayerListPage updatedCount={updatedCount} />}



//       <Modal
//         title="Title"
//         open={open}
//         onOk={handleOk}
//         confirmLoading={confirmLoading}
//         onCancel={handleCancel}
//         updatedCount={updatedCount}
//         payload={payload}
//         setUpdatedCount={setUpdatedCount}
//       >
//         <p>{modalText}</p>
//       </Modal>
//     </>
//   )
// }
// export default CreateUpdatePlayer
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
import { addPlayer, updatePlayer } from "../../../services/players/players"
import React, { useState } from 'react';
import { Modal } from 'antd';
import PlayerList from './PlayersList';
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
const CreateUpdatePlayer = ({payload, form, playerUpdated, handleCancel}) => {
  const submitForm = (values)=>{
    payload.current.data = {...payload.current.data, ...values}
    if(payload.current.operation === 'ADD'){
      payload.current.data.playerId = Math.random()
      console.log(payload.current)
      addPlayer(payload.current.data).then(()=>playerUpdated())
    }
    else {
      updatePlayer(payload.current.data, 'playerId').then(()=>playerUpdated())
    }
  }
  const [confirmLoading, setConfirmLoading] = useState(false);
  const [modalText, setModalText] = useState('Content of the modal');
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
export default CreateUpdatePlayer



