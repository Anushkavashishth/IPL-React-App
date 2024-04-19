import PlayerDetail from "./PlayerDetail"
import { ArrowLeftOutlined } from '@ant-design/icons'
import { Button } from 'antd'
import BatsmanStatTable from "./BatsmanStatTable"
import BowlerStatTable from "./BowlerStatTable"
import AllRounderStatTable from "./AllRounderStatTable"
const PlayerDetailPage = ({ back, selectedPlayer }) => {
    console.log(selectedPlayer, 'selected')
    return (
        <>

            <Button style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px', marginTop: '16px' }} type="primary" onClick={back} ><ArrowLeftOutlined />
            </Button>
            {selectedPlayer && <PlayerDetail selectedPlayer={selectedPlayer} />}
            {selectedPlayer && selectedPlayer.specialization === "Batsman" && <BatsmanStatTable batsmen={selectedPlayer} />}
            {selectedPlayer && selectedPlayer.specialization === "Bowler" && <BowlerStatTable  bowlers={selectedPlayer} />}
            {selectedPlayer && selectedPlayer.specialization === "all-rounder" &&<AllRounderStatTable  allrounders={selectedPlayer} />}
        </>
    )

}
export default PlayerDetailPage