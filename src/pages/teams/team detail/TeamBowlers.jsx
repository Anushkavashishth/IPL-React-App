import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const TeamBowlers = ({ bowlers }) => {
    return (
        <div>
            <h2 className='what-r-u-text' style={{margin: 0, textAlign: "left"}}>BOWLERS</h2>
            <Row gutter={[16, 16]}>
                {bowlers?.map((bowler) => (
                    <Col>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt={bowler.playerName} src={bowler.photo} />}
                        >
                            <Meta title={bowler.playerName} description={bowler.specialization} />
                        </Card>

                    </Col>

                ))}
            </Row>
        </div>
    );
};

export default TeamBowlers;