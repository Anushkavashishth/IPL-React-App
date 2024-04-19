import { Card, Col, Row, Divider } from 'antd';
const { Meta } = Card;
const TeamList = ({ teams,next,setSelectedTeam,payload,initFormData,updatedCount,showModal }) => {
    console.log('next received', next)
    return (
        <>
        <Button type="primary" onClick={()=>initCreateUpdate()} style={{ position: 'absolute', top: '135px', right: '40px' }}>ADD TEAM</Button>
            <img src="assets\teams\logo\IPL.png" width={200} alt="IPL" />

            <Divider orientation="left"></Divider>
            <Row justify="center" gutter={[24, 24]}>
                {teams.map((team, index) => {
                    return (
                        <Team key={team.team_id} team={team} index={index} onClick={next} setSelectedTeam={setSelectedTeam} />
                    )
                })}
            </Row>

        </>
    )

}
const Team = ({ team, onClick, setSelectedTeam }) => {
    return (


        <Col>
            <Card
                onClick={() => {
                    onClick()
                    setSelectedTeam(team)
                }}
                hoverable
                style={{
                    width: 300,
                    backgroundColor: "lightskyblue",
                    borderColor: ""
                }}
                cover={<img alt={team.team_name} src={team.team_logo} />}
            >
                <Meta title={team.team_name} />

            </Card>
        </Col>



    )
}
export default TeamList;

