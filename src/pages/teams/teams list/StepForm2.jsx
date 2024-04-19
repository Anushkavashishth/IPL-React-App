// import * as React from "react";
// import { Form as AntdForm, Button, Select } from "antd";
// import { useDataRef } from "rjv-react";
// import { Form, NumberField, SelectField } from "rjv-react-antd";

// type BackProps = {
//   onBack: (data: any) => void;
// };

// function BackBtn({ onBack }: BackProps) {
//   const dataRef = useDataRef("/");

//   return <Button onClick={() => onBack(dataRef.value)}>Back</Button>;
// }

// type Props = BackProps & {
//   data: any;
//   onSuccess: (data: any) => void;
// };

// export default function StepForm({ data, onSuccess, onBack }: Props) {
//   return (
//     <Form onSuccess={onSuccess} data={data}>
//       <NumberField
//         path="age"
//         schema={{ type: "number", minimum: 1, presence: true }}
//         label="Age"
//       />
//       <SelectField
//         path="sex"
//         schema={{ default: "", presence: true }}
//         label="Sex"
//       >
//         <Select.Option value="male">Male</Select.Option>
//         <Select.Option value="female">Female</Select.Option>
//       </SelectField>

//       <AntdForm.Item>
//         <BackBtn onBack={onBack} />
//         &nbsp;
//         <Button type="primary" htmlType="submit">
//           Submit
//         </Button>
//       </AntdForm.Item>
//     </Form>
//   );
// // }
// import { Button, Form, Input } from "antd";
// import { addTeam, updateTeam } from "../../../services/players/players"
// const StepForm2 = ({ back, form, success, payload }) => {
//   const submitForm = (values) => {
//     payload.current.data = { ...payload.current.data, ...values };
//     // console.log("payload", payload);
//     if (payload.current.operation === "ADD") {
//       payload.current.data.eventId = Math.random();
//       addTeam(payload.current.data).then((events) => {
//         success();
//       });
//     } else {
//       updateFunction(payload.current.data, "eventId").then((events) => {
//         success();
//       });
//     }
//   };
//   return (
//     <>
//       <h2>Form 2</h2>
//       <Form
//         name="basic"
//         labelCol={{span: 8,}}
//         wrapperCol={{span: 16,}}
//         style={{maxWidth: 600,}}
//         onFinish={submitForm} form={form} autoComplete="off">
//         <Form.Item
//           label="Event Price" name="Price"
//           rules={[
//             {
//               required: true,  message: "Please input event name!",
//             },
//           ]}>
//           <Input />
//         </Form.Item>
//         <Form.Item>
//           <Button type="primary" onClick={back}>
//             Previous
//           </Button>
//           <Button type="primary" htmlType="submit">
//           {payload.current.operation === "ADD" ? "Add Event" : "Update Event"}
//           </Button>
//         </Form.Item>
//       </Form>
//     </>
//   );
// };

// export default StepForm2;
