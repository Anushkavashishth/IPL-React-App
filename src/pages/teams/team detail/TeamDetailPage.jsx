import TeamDetail from "./TeamDetail"
import TeamBatters from "./TeamBatters";
import TeamBowlers from "./TeamBowlers";
import TeamAllRounders from "./TeamAllRounders";
import { ArrowLeftOutlined } from '@ant-design/icons';
import bgg from "../../../image/bottom-section-bg.svg"

const TeamDetailPage = ({ back, selectedTeam }) => {

      // const [teamDetails, setTeamDetails] = useState(null)
      // useEffect(() => {
      //       getTeam(selectedTeam.team_id)
      //             .then(([teamData, teamsData]) => {
      //                   console.log('promises data', teamData)
      //                   console.log('prom data', teamsData)
      //                   setTeamDetails({ teamDetail: teamData, teams: teamsData, players: teamsData.players? })
      //             })
      // }, []);

      // console.log(teamDetails)
      // const selectedTeamDetails = teamDetails?.teams?.find(team => team.team_id === selectedTeam);
      const batsmen = selectedTeam?.players.filter(player => player.specialization === "Batsman");
      console.log("batters", batsmen)
      const bowlers = selectedTeam?.players.filter(player => player.specialization === "Bowler");
      const allrounders = selectedTeam?.players.filter(player => player.specialization === "all-rounder");

      return (
            <>
                   <div style={{ display: 'flex', justifyContent: 'flex-start', marginBottom: '16px', marginTop: '16px'}}>
                  
                  <ArrowLeftOutlined type="primary" onClick={back} />
                   </div>
                  
                   {selectedTeam &&  <TeamDetail selectedTeam={selectedTeam} />}
                        <div style={{backgroundImage: `url(${bgg})`, backgroundRepeat: "repeat-y",backgroundColor:"#f0f2f8",flexWrap:"wrap",marginLeft:"50px"}}>
                         {selectedTeam && <TeamBatters selectedTeam={selectedTeam} batsmen={batsmen} />}
                        {selectedTeam && <TeamBowlers selectedTeam={selectedTeam} bowlers={bowlers} />}
                        {selectedTeam && <TeamAllRounders selectedTeam={selectedTeam} allrounders={allrounders} />}
                        </div>

                  </>
                  )

}
                  export default TeamDetailPage

                 

