import React, {Component} from 'react'; 


import './editteams.css';

class EditTeams extends Component {
	constructor() {
		super(); 
		this.state = {
			team : {
				name: '',
				points: '', 
				wins: '', 
				losses: '', 
				top: '',
				jg: '', 
				mid: '',
				adc: '',
				support: ''
			},
			allTeams: [], 
			allEvents: [], 
			edit : {
				name: '',
				points: '', 
				wins: '', 
				losses: '', 
				top: '',
				jg: '', 
				mid: '',
				adc: '',
				support: ''
			},
			event: {
				title: '', 
				start: '',
				end: ''
			}

		}
	}

	componentDidMount() {
		this.getTeams();
		this.getEvents(); 
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
	getEvents = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/events`);
			if (!response.ok) {
 				throw Error(response.statusText);
 			}

 			const parsedTeams = await response.json(); 
 			this.setState({
 				allEvents: parsedTeams.events
 			});

		} catch (err) {
			return err; 
		}
	}
	handleInput = (e) => {
		this.setState({
			team: {
				...this.state.team, 
				[e.target.name]: e.target.value
			}
		});
	}

	editInput = (e) => {
		this.setState({
			edit: {
				...this.state.edit, 
				[e.target.name]: e.target.value
			}
		})
	}

	editEvent = (e) => {
		this.setState({
			event: {
				...this.state.event, 
				[e.target.name]: e.target.value
			}
		})
	}

	handleSubmit = async (e) => {
		e.preventDefault(); 
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/admin/secret`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state.team),
				headers: {
					'Content-Type': 'application/json'
					}
			});

			if (!response.ok) {
				throw Error(response.statusText);
			}

			const parsed = await response.json();
			this.setState({
				allTeams: [...this.state.allTeams, parsed.created]
			});

		} catch (err) {
			return err; 
		}
	}

	deleteTeam = async (id) => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/admin/secret/${id}`, {
				method: 'DELETE',

			});

			if (!response.ok) {
				throw Error(response.statusText);
			}

			const parsed = await response.json(); 

			if(parsed.status === 'success') {
				const temp = this.state.allTeams.filter( team => team._id !== id); 
				this.setState({
					allTeams: temp
				})
			}


		} catch (err) {
			return err; 
		}
	}

	deleteEvent = async (id) => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/events/${id}`, {
				method: 'DELETE'
			});

			if (!response.ok) {
				throw Error(response.statusText);
			}

			const parsed = await response.json(); 

			if(parsed.status === 'success') {
				const temp = this.state.allEvents.filter( team => team._id !== id); 
				this.setState({
					allEvents: temp
				})
			}


		} catch (err) {
			return err; 
		}
	}

	editTeam = async (id) => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/admin/secret/${id}/update`);
			if (!response.ok) {
				throw Error(response.statusText);
			}

			const parsed = await response.json(); 
			this.setState({
				edit: parsed.team
			})
		} catch (err) {
			return err; 
		}
	}

	submitEdit = async (e) => {
		e.preventDefault();
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/admin/secret/${this.state.edit._id}`, {
				method: "PUT",
				body: JSON.stringify(this.state.edit), 
                headers: {
                    'Content-Type': 'application/json'
                }
			});
			if (!response.ok) { 
				throw Error(response.statusText);
			}

			const parsed = await response.json();
			const tempArray = this.state.allTeams.map((item) => {
                    if (item._id === this.state.edit._id) {
                        item = parsed.team;
                    } 
                    return item; 
                    
                });

			this.setState({
				allTeams: tempArray
			})
 

		} catch (err) {
			return err; 
		}
	}

	createEvent = async (e) => {
		e.preventDefault(); 
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/events`, {
				method: 'POST', 
				body: JSON.stringify(this.state.event), 
				headers: {
					'Content-Type': 'application/json'

				}
			});

			if(!response.ok) {
				throw Error(response.statusText); 
			}

			const parsed = await response.json(); 
			this.setState({
				allEvents: [...this.state.allEvents, parsed.created]
			})

		} catch (err) {
			return err; 
		}
	}

	render() {
		const showTeams = this.state.allTeams.map((item) => {
			return (
				<div key={item._id}> 
					{item.name}

					<button onClick={this.deleteTeam.bind(null, item._id)}> DELETE </button>
					<button onClick={this.editTeam.bind(null, item._id)}> EDIT TEAM </button>
				</div>
				)
		});

		const showEvents = this.state.allEvents.map((item) => {
			return (
				<div key={item._id}> 
					{item.title}, {item.start}
					<button onClick={this.deleteEvent.bind(null, item._id)}> DELETE </button> 
				</div>
				)
		})
		return (
			<div>
				<div className="admin-background"> </div>

				All Events 

				{showEvents}

				Create Event

				<form onSubmit={this.createEvent}> 
					<p> Title </p> <input type="text" name="title" value={this.state.event.title} onChange={this.editEvent} />
					<p> Start Time </p> <input type="date" name="start" value={this.state.event.start} onChange={this.editEvent} />

					<p> End Time </p> <input type="date" name="end" value={this.state.event.end} onChange={this.editEvent} />
					<p> Put Start and End the same.  </p>

					<div> <input type="submit" value="create event" /> </div>
				</form> 

				Create Team
				<form onSubmit={this.handleSubmit}>
					<p> Name </p> <input type="text" name="name" value={this.state.team.name} onChange={this.handleInput} />
					<p> Points </p> <input type="text" name="points" value={this.state.team.points} onChange={this.handleInput} />
					<p> Wins </p> <input type="text" name="wins" value={this.state.team.wins} onChange={this.handleInput} />
					<p> Losses </p> <input type="text" name="losses" value={this.state.team.losses} onChange={this.handleInput} />
					
					<p> Top </p>  <input type="text" name="top" value={this.state.team.top} onChange={this.handleInput} />
					<p> jg </p> <input type="text" name="jg" value={this.state.team.jg} onChange={this.handleInput} />
					<p> mid </p> <input type="text" name="mid" value={this.state.team.mid} onChange={this.handleInput} />
					<p> adc </p> <input type="text" name="adc" value={this.state.team.adc} onChange={this.handleInput} />
					<p> sup </p> <input type="text" name="support" value={this.state.team.support} onChange={this.handleInput} />
					<div> <input type="submit" value="create"/> </div>
				</form> 

				All Teams 
				{showTeams}

				<p> Edit Teams </p>
				<form onSubmit={this.submitEdit}>
					<p> Name </p> <input type="text" name="name" value={this.state.edit.name} onChange={this.editInput} />
					<p> Points </p> <input type="text" name="points" value={this.state.edit.points} onChange={this.editInput} />
					<p> Wins </p> <input type="text" name="wins" value={this.state.edit.wins} onChange={this.editInput} />
					<p> Losses </p> <input type="text" name="losses" value={this.state.edit.losses} onChange={this.editInput} />
					
					<p> Top </p>  <input type="text" name="top" value={this.state.edit.top} onChange={this.editInput} />
					<p> jg </p> <input type="text" name="jg" value={this.state.edit.jg} onChange={this.editInput} />
					<p> mid </p> <input type="text" name="mid" value={this.state.edit.mid} onChange={this.editInput} />
					<p> adc </p> <input type="text" name="adc" value={this.state.edit.adc} onChange={this.editInput} />
					<p> sup </p> <input type="text" name="support" value={this.state.edit.support} onChange={this.editInput} />
					<div> <input type="submit" value="EDIT"/> </div>
				</form> 
			</div>




			)
	}
}

export default EditTeams;