import React, {Component} from 'react'; 
import {Link} from 'react-router-dom';
import Cookies from 'universal-cookie'; // here!!!!

import './nav.css';

const dropdownInfo = (<div className="dropdown-content">
					<ul>
						<a className="drop" href="https://discord.gg/kwNwr7J"><li>DISCORD</li></a>
						<a className="drop" href="https://www.twitch.tv/vangamingleague"><li>TWITCH</li></a>
						<a className="drop" href="/signup"><li>JOIN LEAGUE</li></a>

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
				<a href="https://www.twitch.tv/vangamingleague">WATCH</a>
				<a onClick={this.showDropdown} > ABOUT VGL </a>
				
				{ this.state.dropdown ? dropdownInfo : null }
				
				<Link to = "/login">{cookies.get('userId') ? <span onClick={this.logout}> LOGOUT </span> : <span> LOGIN </span>}</Link>


			</nav>
		</header>

		)
	}
	
}

export default NavBar;