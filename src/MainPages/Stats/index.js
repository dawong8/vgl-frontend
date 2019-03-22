import React, {Component} from 'react'; 
import NavBar from '../../NavBar';
import ShowTeams from '../../ShowTeams';

class Stats extends Component {
	constructor() {
		super(); 
		this.state = {
			allTeams: []
		}
	}

	componentDidMount() {
		this.getTeams();
	}

	getTeams = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/stats`);
			if (!response.ok) {
 				throw Error(response.statusText);
 			}

 			const parsedTeams = await response.json(); 
 			this.setState({
 				allTeams: parsedTeams.allTeams
 			});

		} catch (err) {
			return err; 
		}
	}

	render() {
		console.log(typeof this.state.allTeams)
		return (
			<div>
				<NavBar />
				<div className="stats"> 
					<h2>Teams & Standings</h2>
					<ShowTeams allTeams={this.state.allTeams} />
				</div>
			</div>

			)
	}


}

export default Stats;