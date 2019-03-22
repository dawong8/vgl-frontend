import React from 'react'; 
import {Link} from 'react-router-dom';

const ShowTeams = (props) => {
	const sortedTeams = props.allTeams.sort(function(a,b) {
		return b.points - a.points;
	});


	const teams = sortedTeams.map((item, index) => {
		return (<tr key={item._id}>
				<td> {index + 1} </td>
				<td><Link to={"/team/" + item._id} > {item.name} </Link></td>
				<td>{item.points}</td>
				<td>{item.wins}</td>
				<td>{item.losses}</td>
				<td>{item.wins + item.losses}</td>
				<td>{item.top}</td>
				<td>{item.jg}</td>
				<td>{item.mid}</td>
				<td>{item.adc}</td>
				<td>{item.support}</td>

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
			    <th>TOP</th>
			    <th>JG</th>
			    <th>MID</th>
			    <th>BOT</th>
			    <th>SUP</th>

			  </tr>
			</thead>
			<tbody>
			  {teams}
			</tbody>
		</table>
		)
}

export default ShowTeams;