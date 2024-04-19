import bg from "../../../../src/image/image.png"
import { Card, Col, Row } from 'antd';

const TeamDetail = ({ selectedTeam }) => {
  return (
    <Row gutter={[16, 16]}
    style={{backgroundImage: `url(${bg})`, height:350}}>
     
      <Col xs={24} md={12}>
      {/* <Card style={{ width: '50%'}}> */}
        <div style={{ display: 'flex', alignItems: 'center' , marginTop: '70px'}}>
          <img src={selectedTeam?.team_logo} style={{ width: 200 , height: 200}} alt="Team Logo" />
          <h2 style={{ marginLeft: '50px', color:"white" }}>{selectedTeam?.team_name}</h2>
        </div>
        {/* </Card> */}
      </Col>

     
      <Col xs={24} md={12}>
        <Card style={{ width: '100%', backgroundColor:'#0958d9', marginTop: '70px',marginRight: '200px' }}>
          <p><strong>OWNER -{selectedTeam?.owner_name.toUpperCase()}</strong> </p>
          <p><strong>COACH -  {selectedTeam?.coach_name.toUpperCase()}</strong> </p>
          <p><strong>CAPTAIN -  {selectedTeam?.captain_name.toUpperCase()}</strong> </p>
        </Card>
      </Col>
    </Row>
  );
};

export default TeamDetail;



