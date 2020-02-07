import React from 'react'
import TeamCard from '../TeamCard/TeamCard.js'
import './TeamsContainer.css'

const TeamsContainer = ({ teams, deleteTeam }) => {
    let allTeams = teams.map(team => <TeamCard deleteTeam={deleteTeam} {...team}/>)
    return (
        <div>
            {allTeams}
        </div>
    )
}

export default TeamsContainer;
