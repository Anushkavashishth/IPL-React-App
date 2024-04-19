import { useState } from "react"
import TeamListPage from "./teams list/TeamListPage"
import TeamDetailPage from "./team detail/TeamDetailPage"
import MultiStepRouter from "./teams list/MultiStepRouter"

const UI = {
    TeamListPage: 'TeamListPage',
    TeamDetailPage: 'TeamDetailPage'
}


const TeamsWrapper = () => {
    const [ui, SetUI] = useState(UI.TeamListPage)
    const [selectedTeam, setSelectedTeam] = useState(null)
    console.log("set", selectedTeam)
    return (
        <>
            {ui === UI.TeamListPage && <MultiStepRouter next={() => {
                SetUI(UI.TeamDetailPage)
                //console.log('reached')
            }} setSelectedTeam = {setSelectedTeam}
             />}
            {ui === UI.TeamDetailPage && <TeamDetailPage back={() => SetUI(UI.TeamListPage)} selectedTeam = {selectedTeam} />}
            {/* <h1>1{selectedTeam}</h1> */}
        </>
    )

}
export default TeamsWrapper