import React from 'react'; 


const TeamInfo = (props) => { 

	return (
		<div>
			{props.team.name}
			<h5 className="scoring"> W {props.team.wins} - L {props.team.losses} </h5>

		</div>
		)
};


export default TeamInfo;