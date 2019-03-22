import React, {Component} from 'react'; 
import Login from '../Login';

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