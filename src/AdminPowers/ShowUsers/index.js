import React, {Component} from 'react'; 

class ShowUsers extends Component {

	constructor() {
		super(); 
		this.state = {
			allUsers: []
		}
	}

	componentDidMount() {
		this.getUsers(); 
	}

	getUsers = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/users`);

			if (!response.ok) {
				return Error(response.statusText);
			}

			const parsed = await response.json(); 

			this.setState({
				allUsers: parsed.allUsers
			})

		} catch (err) {
			return err; 
		}
	}

	render() {
		return (
			<div> 
			</div>
			)
	}
}

export default ShowUsers;