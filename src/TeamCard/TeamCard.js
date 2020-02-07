import React from 'react'
import './TeamCard.css'

const TeamCard = ({head_coach, name, sport, id, deleteTeam}) => {
    return(
        <div className='team-card'>
            <h3>{head_coach}</h3>
            <h3>{name}</h3>
            <h4>{sport}</h4>
            <button onClick={() => deleteTeam(id)}>Delete</button>
        </div>
    )
}


export default TeamCard;
