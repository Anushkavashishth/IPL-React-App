import CompletedMatchesPage from "../../matches/completed matches/CompletedMatchesPage";
import UpcommingMatchesPage from "../../matches/upcomming matches/UpcommingMatchesPage";
import PlayersWrapper from "../../players/PlayersWrapper";
import TeamsWrapper from "../../teams/TeamsWrapper";
import HomePage from "../HomePage";

export const items = [
    { key: '1', label: 'Home', path: `/`, component:<HomePage/> },
    { key: 'upcoming', label: 'Upcoming Matches', path: `/upcoming-matches`, component:<UpcommingMatchesPage/> },
    { key: 'completed', label: 'Completed Matches', path: `/completed-matches`, component: <CompletedMatchesPage /> },
    { key: '3', label: 'Teams', path: `/teams`, component: <TeamsWrapper/> },
    { key: '4', label: 'Players', path: `/players`, component: <PlayersWrapper/> },
  ];
  
  