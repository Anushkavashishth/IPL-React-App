import { Card, Row, Col } from 'antd';
const { Meta } = Card;

const TeamAllRounders = ({ allrounders }) => {
    return (
        <div>
            <h2 className='what-r-u-text' style={{margin: 0, textAlign: "left"}}>All Rounders</h2>
            <Row gutter={[16, 16]}>
                {allrounders?.map((allrounder) => (
                    <Col>
                    <Card
                        hoverable
                        style={{
                            width: 240,
                        }}
                        cover={<img alt={allrounder.playerName} src={allrounder.photo} />}
                    >
                        <Meta title={allrounder.playerName} description={allrounder.specialization} />
                    </Card>
                    </Col>

                ))}
            </Row>

        </div>
    );
};

export default TeamAllRounders;