import { useEffect,useState } from "react"
import { getPlayers } from "../../../services/players/players"
import PlayerList from "./PlayersList"
import CreateUpdatePlayer from "./CreateUpdatePlayer"

const PlayerListPage=({next,setSelectedPlayer,updatedCount, initFormData, showModal, payload})=>{
           const[players,setPlayers] = useState(null)
           useEffect(()=>{
            console.log('refreshing players list')
            getPlayers().then((players)=>setPlayers(players))
           }, [updatedCount])

           return(
            <>
            {players && 
                <PlayerList players={players} next={next} setSelectedPlayer={setSelectedPlayer} initFormData={initFormData} showModal={showModal} payload={payload}/>
            }
            
           </>
            
           )
}
export default PlayerListPage