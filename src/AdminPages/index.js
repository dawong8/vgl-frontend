import React, {Component} from 'react'; 
import Login from '../Login';
// import {Redirect} from 'react-router-dom';

class AdminPages extends Component {
	constructor() {
		super(); 
		this.state = {

		}
	}

	render() {

		return (
			<div> 
				<Login admin={true} />

			</div>
			)
	}
}

export default AdminPages;