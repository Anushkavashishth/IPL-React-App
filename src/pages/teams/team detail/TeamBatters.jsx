import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const TeamBatters = ({ batsmen }) => {
    console.log(batsmen, "B")
    return (
        <div>
            <h2 className='what-r-u-text' style={{margin: 0, textAlign: "left"}}>BATTERS</h2>
            <Row gutter={[16, 16]}>
                
                {batsmen?.map((batter) => (
                    <Col >
                        <Card

                            style={{
                                width: 240,
                            }}
                            cover={<img alt={batter.playerName} src={batter.photo} />}
                        >
                            <Meta style={{ textAlign: "center" }} title={batter.playerName} description={batter.specialization} />
                        </Card>
                    </Col>

                ))}
            </Row>
        </div>
    );
};

export default TeamBatters

