import React, {Component} from 'react'; 
import Cookies from 'universal-cookie'; // here!!!!

import AdminContent from '../AdminPowers/AdminContent';

class AdminContainer extends Component {
	constructor() {
		super();
		this.state = {
			admin: false, 
		}
	}

	componentDidMount() {
		this.getCurrentUser(); 
	}

	getCurrentUser = async () => {
		try {
			const cookie = new Cookies(); 
			const userId = cookie.get('userId');
			if (typeof userId == 'undefined') {
				return false;
			}
			console.log('userId', userId);

			const response = await fetch(`${process.env.REACT_APP_API}/users/`+userId, {
		    	credentials: 'include'
		    });

			if (!response.ok) {
				return Error(response.statusText);
			}

			const responseParsed = await response.json(); 

			if (responseParsed.found.isAdmin) {
				this.setState({
					admin: responseParsed.found.isAdmin
				})
			}



		} catch (err) {
			return err; 
		}
	}

	render() {
		console.log('states', this.state.admin)
		return (
			<div> 
				{this.state.admin ? <AdminContent /> : <p> You do not have access to this page. </p> }
			</div>
			)
	}
}

export default AdminContainer;