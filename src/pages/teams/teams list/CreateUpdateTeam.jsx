import StepForm1 from "./StepForm1"
import StepForm2 from "./StepForm2"
import { Modal } from 'antd';

const CreateUpdateTeam=({payload, form, teamUpdated, handleCancel,handleOk})=>{
return(
    <>
    {/* <Modal
        title="Title"
        open={true}
       // onOk={handleOk}
        //confirmLoading={confirmLoading}
        onCancel={handleCancel}
      > */}
    <StepForm1 payload={payload} form={form} teamUpdated={teamUpdated} handleOk={handleOk}/>
    {/* <StepForm2 payload={payload} teamUpdated={teamUpdated} handleCancel={handleCancel}/> */}
    {/* </Modal> */}
    </>
)}
export default CreateUpdateTeam