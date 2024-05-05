import CompletedMatchesPage from "../../matches/completed matches/CompletedMatchesPage";
import UpcommingMatchesPage from "../../matches/upcomming matches/UpcommingMatchesPage";
import PlayersWrapper from "../../players/PlayersWrapper";
import TeamsWrapper from "../../teams/TeamsWrapper";
import HomePage from "../HomePage";


export const items = [
  
  { key: '1', label: 'home', path: `/`, component: <HomePage /> },
  {
    key: '2', label: 'matches', path: `/`, component: <HomePage />,
    submenu: [
      { key: 'upcoming', label: 'upcoming', path: `/upcomingMatches`, component: <CompletedMatchesPage /> },
      { key: 'completed', label: 'completed', path: `/completedMatches`, component: <UpcommingMatchesPage /> }
    ]
  },
  { key: '3', label: 'teams', path: `/teams`, component: <TeamsWrapper /> },
  { key: '4', label: 'players', path: `/players`, component: <PlayersWrapper /> },
];


