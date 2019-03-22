import React, {Component} from 'react'; 
import NavBar from '../NavBar';
import TeamInfo from '../TeamInfo';

import './team.css'

class TeamProfile extends Component {

	constructor() {
		super(); 
		this.state = {
			team: null,
		}
	}
	componentDidMount() {
		this.getTeamInfo();
	}

	getTeamInfo = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/`+this.props.match.params.handle, {
				credentials: 'include'
			});
			if(!response.ok){
	            return Error(response.statusText);
	        }
	        const foundUserParsed = await response.json(); 

	        this.setState({
	        	team: foundUserParsed.found
	        });

		} catch (err) {
			return err; 
		}
	}

	render() {
		console.log(this.state.team)
		return (
			<div> 
				<NavBar/>
				<div className="team-profile-container"> 
					<h1> {this.state.team ? <TeamInfo team={this.state.team} />: null }</h1> 
				</div>
			</div>
			)
	}
}

export default	TeamProfile;