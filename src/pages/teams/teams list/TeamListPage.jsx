import TeamList from "./TeamList"
import bg from "../../../../src/image/image.png"
import { useEffect, useState } from "react"
import { getTeams } from "../../../services/teams/teams"

const TeamListPage = ({next,setSelectedTeam,updatedCount, initFormData, showModal, payload}) =>{
    const [teams, setTeams]=useState(null)
    useEffect(()=>{
        getTeams().then((teams)=>setTeams(teams))
    }, [])

    return(
        <>
        
        {teams && <div style={{backgroundImage: `url(${bg})`}}>
            <TeamList teams = {teams} next={next} setSelectedTeam={setSelectedTeam}   payload={payload}
                    initFormData={initFormData}
                    updatedCount={updatedCount}
                    showModal={showModal}/> 
        </div>
        }
        
        </>
    );
    
}
export default TeamListPage;