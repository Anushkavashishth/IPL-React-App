import PlayersWrapper from "../../players/PlayersWrapper";
import TeamsWrapper from "../../teams/TeamsWrapper";
import HomePage from "../HomePage";

export const items = [
    { key: '1', label: 'Home', path: `/`, component:<HomePage/> },
    { key: '2', label: 'Matches', path: `/matches`, component:<TeamsWrapper/> },
    { key: '3', label: 'Teams', path: `/teams`, component: <TeamsWrapper/> },
    { key: '4', label: 'Players', path: `/players`, component: <PlayersWrapper/> },
  ];