import React, {Component} from 'react';
import NavBar from '../../../NavBar';
import Dates from '../Dates';

import BigCalendar from 'react-big-calendar'
import moment from 'moment'
import './calendar.css';

const localizer = BigCalendar.momentLocalizer(moment) // or globalizeLocalizer




class Calendar extends Component {
	constructor() {
		super(); 
		this.state = {
			allEvents:[]
		};
	}

	componentDidMount() {
		this.getEvents(); 
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

	render() {


		const MyCalendar = (
		  <div className="calendar">
		    <BigCalendar
		      localizer={localizer}
		      events={[]}
		      startAccessor="start"
		      endAccessor="end"
		    />
		  </div>
		);

		return (
			<div> 
				<NavBar />
				<iframe className="cal" src="https://calendar.google.com/calendar/b/1/embed?showTitle=0&amp;showNav=0&amp;showPrint=0&amp;showCalendars=0&amp;showTz=0&amp;height=600&amp;wkst=1&amp;bgcolor=%23ffffff&amp;src=vangamingesports%40gmail.com&amp;color=%231B887A&amp;ctz=America%2FLos_Angeles"></iframe>
			</div>
		)
	}
	
}; 


export default Calendar;