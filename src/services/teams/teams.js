import teams from "./teams.json"
import crud from "../../utils/crudService";

export const getTeam = () => {
    return new Promise(resolve => {
        let list = crud.get(teams)
        resolve(list[0]);
    })
};

export const getTeams = () => {
    return new Promise(resolve => {
        let list = crud.get(teams)
        resolve(list);
    })
};

export const addTeam = (newTeam) => {  
      
    return new Promise(resolve => {
        let list = crud.add(teams, newTeam)
            resolve(list);
    })
};

export const removeTeam = (id) => {    
    return new Promise(resolve => {
        let list = crud.remove(teams, id, "teamId")
        resolve(list);
    })
};

export const updateTeam = (updateTeam) => {  
    return new Promise(resolve => {       
        let list = crud.update(teams, updateTeam, "teamId")
        resolve(list);
    })
};
// story of both break in components on paper ,
// what all states in document , use ref - , component -
