import React from 'react'; 
import {Link} from 'react-router-dom';

const ShowTeams = (props) => {
	const sortedTeams = props.allTeams.sort(function(a,b) {
		return b.points - a.points;
	});


	const teams = sortedTeams.map((item, index) => {
		return (<tr key={item._id}>
				<td> {index + 1} </td>
				<td><Link to={"/team/" + item._id} className="team-linker"> {item.name} </Link></td>
				<td>{item.points}</td>
				<td>{item.wins}</td>
				<td>{item.losses}</td>
				<td>{item.wins + item.losses}</td>

			</tr>
		)
	});

	return (
		<table>
			<thead>
			  <tr>
			  	<th> PLACEMENT </th>
			    <th>TEAM</th>

			    <th>POINTS</th>

			    <th>WINS</th>
			    <th>LOSSES</th>
			    <th> GAMES PLAYED </th>

			  </tr>
			</thead>
			<tbody>
			  {teams}
			</tbody>
		</table>
		)
}

export default ShowTeams;