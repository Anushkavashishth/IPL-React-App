import { Form } from 'antd'
import { useRef, useState } from 'react'
import CreateUpdatePlayer from './CreateUpdatePlayer'
import PlayerListPage from './PlayersListPage'
export const SingleStepRouter = ({next, setSelectedPlayer}) => {
    
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
                <CreateUpdatePlayer
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
                <PlayerListPage
                    payload={payload}
                    next={next}
                    setSelectedPlayer={setSelectedPlayer}
                    initFormData={initFormData}
                    updatedCount={updatedCount}
                    showModal={showModal}
                    
                />
            }
        </>
    )
}
