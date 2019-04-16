import React from 'react'; 
import './teaminfo.css';

const TeamInfo = (props) => { 

	return (
		<div className="team-background">
			{props.team.name} 
			<h5 className="scoring"> W {props.team.wins} - L {props.team.losses} </h5>

		</div>
		)
};


export default TeamInfo;