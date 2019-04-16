import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie'; // here!!!!

import './nav.css';

const dropdownInfo = (<div className="dropdown-content">
					<ul>
						<a className="drop"  target="_blank" href="https://discord.gg/kwNwr7J"><li>DISCORD</li></a>
						<a className="drop"  target="_blank" href="https://www.twitch.tv/vangamingleague"><li>TWITCH</li></a>
						<a className="drop" href="/"><li>JOIN LEAGUE</li></a>

					</ul>
				</div>);


class NavBar extends Component {

	constructor() {
		super(); 
		this.state = {
			dropdown: false, 
		}
	}

	showDropdown = () => {
		this.setState({
			dropdown: !this.state.dropdown
		})
	}

	logout = async () => {
		console.log('logout clicked');
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/logout`, {
	        	credentials: 'include'
	      	});

			if (!response.ok) {
				throw Error(response.statusText)
			}

			const responseParsed = await response.json(); 

			if(responseParsed.data === 'logout successful'){
	              const cookies = new Cookies();
	              cookies.remove("userId");

	              // Redirect to login page after successful logout
	              this.props.history.push('/login');
	        }
		} catch (err) {
			return err;
		}
	}


	render() {
		const cookies = new Cookies();

		return (
		<header>
			<Link to = "/"> <img src="/images/VanLogoWhite.png" alt="van-logo" id="logo"/> </Link>
			<nav>
				<Link to = "/schedule">SCHEDULE</Link>
				<Link to = "/stats">TEAMS & STANDING</Link>
				<a href="https://www.twitch.tv/vangamingleague" target="_blank">WATCH</a>
				<a onClick={this.showDropdown} > ABOUT VGL </a>
				
				{ this.state.dropdown ? dropdownInfo : null }
				


			</nav>
		</header>

		)
	}
	
}

export default NavBar;