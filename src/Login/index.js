import React, {Component} from 'react'; 
import NavBar from '../NavBar';
import Cookies from 'universal-cookie'; // here!!!!

import EditTeams from '../EditTeams';


import './login.css';

class Login extends Component {
	constructor() {
		super(); 
		this.state = {
			login: {
				username: '', 
				password: '', 
				error: '',
			}, 
			register : {
				username: '', 
				password: '', 
				error: '',
			}, 
			loginSucess: false,
			
		}
	}
	handleLoginSubmit = (e) =>{
		e.preventDefault();
		this.getUser(); 
	}

	handleRegisterSubmit = (e) => {
		console.log('clicked')
		e.preventDefault(); 
		this.registerUser();
	}

	handleLoginInput = (e) => {
		this.setState({
			login: {
				...this.state.login,
				[e.target.name]: e.target.value

			}
		})
	}
	handleRegisterInput = (e) => {
		this.setState({
			register: {
				...this.state.register,
				[e.target.name]: e.target.value

			}
		})
	}

	getUser = async () => {
		try {
			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth/login`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state.login),
				headers: {
					'Content-Type': 'application/json'
					}
				});


			if(!response.ok){
				console.log('err', response.statusText)
				throw Error(response.statusText);

			}

			const parsedReponse = await response.json();

			if(parsedReponse.data === 'login successful')
				// Sets login to successful if the user successfully logs into account
				{
					
					
					const cookies = new Cookies();
					console.log("Login username: ", this.state.login.username);
					console.log("Parsed response: ", parsedReponse);
					cookies.set('userId', parsedReponse.userId);
					console.log("Cookie value: are we here ", cookies.get('userId'));
					
					if (!parsedReponse.isAdmin) {
						// this.props.history.push('/stats');

					} else {

						// this.props.history.push('/secret');

						this.setState({
							loginSucess: true
						})
					}


				}

				else{

					this.setState({
						login: {
							error: 'Incorrect username/password.'

						}
					});
				}

		} catch (err) {
			return err; 
		}
	}

	registerUser = async () => {
		try {

			const response = await fetch(`${process.env.REACT_APP_API}/api/v1/auth`, {
				method: 'POST',
				credentials: 'include',
				body: JSON.stringify(this.state.register),
				headers: {
					'Content-Type': 'application/json'
					}
			});
			console.log("Login response: ", response);

			if(!response.ok){
				console.log('err', response.statusText)
				throw Error(response.statusText);

			}

			const parsedReponse = await response.json();

			if(parsedReponse.data === 'register successful')
				{
					
					
					const cookies = new Cookies();
					console.log("Parsed response: ", parsedReponse);
					cookies.set('userId', parsedReponse.userId);
					console.log("Cookie value: ", cookies.get('userId'));
					this.props.history.push('/stats');
				}

				

		} catch (err) {
			return err; 
		}
	}

	render() {
		return (
			<div>
				<NavBar/>
				{
					this.state.loginSucess ? 
					<EditTeams />

					:
					<form className="modal" onSubmit={this.handleLoginSubmit}>
						<h3> {this.props.admin ? <span> ADMIN LOGIN </span> : <span> LOGIN </span>} </h3>

						<p className="error"> {this.state.login.error ? this.state.login.error : null} </p>
						<input type="text" name="username" value={this.state.username}  onChange={this.handleLoginInput} /> <br /> 
						<input type="password" name="password" value={this.state.password}  onChange={this.handleLoginInput} /> <br/>
						<input type="submit" /> 

					</form>

				}
				
				{ 
					this.props.admin ? 
					null : 
					<form className="register" onSubmit={this.handleRegisterSubmit}>
						<h3> REGISTER </h3>

						<input type="text" name="username" value={this.state.username}  onChange={this.handleRegisterInput} /> <br /> 
						<input type="password" name="password" value={this.state.password}  onChange={this.handleRegisterInput} /> <br/>
						<input type="submit" /> 

					</form>

				}
				
			</div>
			)
	}
}

export default Login; 