import { Card, Row, Col, Typography,Button } from 'antd'
const { Meta } = Card;

const PlayerList = ({ players, next, setSelectedPlayer, payload, initFormData ,showModal}) => {
    // console.log(payload)
    const initCreateUpdate = (id)=>{
        if(id===undefined){
            payload.current.operation = 'ADD'
            payload.current.data = {} 
        }
        else{
            payload.current.operation = 'UPDATE'
            payload.current.data = {
                eventId: id
            }
            
        }
        const playerOjb  = players?.find(
            (player) => player.playerId === payload.current.data.playerId
        )
        payload.current.data = playerOjb
        initFormData()
        showModal();           
    }
    return (
        <>
          <Button type="primary" onClick={()=>initCreateUpdate()} style={{ position: 'absolute', top: '135px', right: '40px' }}>ADD PLAYER</Button>
            
            <Card style={{ marginTop: '100px', marginRight: '30px', marginLeft: '30px', marginBottom: '50px' }}>
                <Row justify="center" gutter={[24, 24]}>
                    {
                        players?.map(player => {
                            return (<Player key={player.playerId} onClick={next} player={player} setSelectedPlayer={setSelectedPlayer} />
                            )
                        })
                    }
                </Row>
            </Card>
        </>

    )

}

const Player = ({ onClick, player, setSelectedPlayer }) => {
    return (
        <Col>
            <Card
                onClick={() => {
                    onClick()
                    setSelectedPlayer(player)
                }}
                hoverable
                style={{
                    width: 300,
                    backgroundColor: '#A7C7E7',
                    borderColor: ""
                }}


                cover={<img alt={player.playerName} src={player.photo} />}
            >
                <Meta title={<Typography.Title level={4}>{player.playerName}</Typography.Title>} description={player.specialization} />

            </Card>
        </Col>
    )

}
export default PlayerList;