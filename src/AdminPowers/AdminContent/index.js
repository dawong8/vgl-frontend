import React from 'react'; 
import {Link} from 'react-router-dom';

const AdminContent = (props) => {
	return ( 
		<div> 
			<p> To edit teams, click on each link and go into their profile and edit scores. </p>
			<Link to = "/stats"> Go to All Teams Page </Link>

			<p> Here are a list of all the current users, if they do not have a team, assign team. This process is necessary in case people make fake accounts to join other people's teams. </p>
		</div>
		)
}

export default AdminContent;