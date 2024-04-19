import { Form } from 'antd'
import { useRef, useState } from 'react'
import CreateUpdateTeam from "./CreateUpdateTeam";
import TeamListPage from "./TeamListPage";
export const MultiStepRouter = ({next, setSelectedTeam}) => {
    
    const [updatedCount, setUpdatedCount] = useState(0)
    
    const payload = useRef({ 
        operation: '',
        data: {}
    })
    const [open, setOpen] = useState(false);

    const showModal = () => {
        setOpen(true);
    };
    const handleCancel = () => {
        setOpen(false);
    };

    const [form] = Form.useForm() 
    const initFormData = () => {
        payload.current.data
            ? form.setFieldValue(payload.current.data)
            : form.resetFields()
    }

    return (
        <>
            {open &&
                <CreateUpdateTeam
                    payload={payload}
                    form={form}
                    playerUpdated={updatedCount=>{
                        setOpen(false)
                        setUpdatedCount(updatedCount+1)
                    }}
                    handleCancel={handleCancel}
                />
            }
            {
                <TeamListPage
                    payload={payload}
                    next={next}
                    setSelectedTeam={setSelectedTeam}
                    initFormData={initFormData}
                    updatedCount={updatedCount}
                    showModal={showModal}
                    
                />
            }
        </>
    )
}
export default MultiStepRouter
