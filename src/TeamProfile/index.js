import React, {Component} from 'react'; 
import NavBar from '../NavBar';
import TeamInfo from '../TeamInfo';

import './team.css'

class TeamProfile extends Component {

	constructor() {
		super(); 
		this.state = {
			team: null,
			playerId: [],
			masteryPic: [], // array of numbers 
			images: [], // champ names
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

	        this.getData(this.state.team.top);

	       	this.getData(this.state.team.jg);
	       	this.getData(this.state.team.mid);

	       	this.getData(this.state.team.adc);
	       	this.getData(this.state.team.support);

		} catch (err) {
			return err; 
		}
	}

	getData = async (name) => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/league/${name}`);
			if(!response.ok){
	            return Error(response.statusText);
	        }
	        const foundUserParsed = await response.json(); 

	        this.getChampion(foundUserParsed.info.id, name)

	        this.setState({
	        	playerId: [...this.state.playerId, foundUserParsed.info]
	        });

		} catch (err) {
			return err; 
		}
	}

	getChampion = async (name, sumName) => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/league/mastery/${name}`);
			if(!response.ok){
	            return Error(response.statusText);
	        }
	        const foundUserParsed = await response.json(); 

	        this.setState({
	        	masteryPic: [...this.state.masteryPic, foundUserParsed.info[0].championId]
	        });

	        this.getSplash(foundUserParsed.info[0].championId, sumName);
		} catch (err) {
			return err; 
		}
	}

	getSplash = async (id, name) => {
		try {
			const response = await fetch('http://ddragon.leagueoflegends.com/cdn/6.24.1/data/en_US/champion.json');
			if(!response.ok){
	            return Error(response.statusText);
	        }
	        const foundUserParsed = await response.json(); 
			for (let champ in foundUserParsed.data) {
				if (foundUserParsed.data[champ].key == id) {
					this.setState({
						images: [...this.state.images, {img: foundUserParsed.data[champ].name, name: name} ]
					})
				}
			}			

		} catch (err) {
			return err; 
		}
	}

	render() {

		const listChamp = this.state.images.map((item, key) => {
			return (
				<div className="" key={key}> 
					<a> {item.name}<img className="profile-champ" src={`http://ddragon.leagueoflegends.com/cdn/img/champion/loading/${item.img}_0.jpg`} alt="champ" /> </a>
					
				</div>
				)
		})

		console.log(this.state)
		return (
			<div> 
				<NavBar/>
				<div className="admin-background"> </div>

				<div className=""> 
					<h1> {this.state.team ? <TeamInfo team={this.state.team} />: null }</h1> 
					<div className="imgrow"> {listChamp} </div>
				</div>
			</div>
			)
	}
}

export default	TeamProfile;