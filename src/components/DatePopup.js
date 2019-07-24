import React, { Component } from 'react';
import firebase from 'firebase';
import Card from '@material-ui/core/Card';

class DatePopup extends Component {

	constructor(props){
		super(props);
		// Get a reference to the database service
		var database = firebase.database();
		this.state = {
			timeValue: '',
			descriptionValue: '',
		};

		this.handleTimeChange = this.handleTimeChange.bind(this);
		this.handleDescriptionChange = this.handleDescriptionChange.bind(this);
	}

	handleTimeChange(event){
		this.setState({timeValue: event.target.value});
	}

	handleDescriptionChange(event){
		this.setState({descriptionValue: event.taget.value});
	}

	handleSubmit(event){
		alert("A time and description was submitted: " + this.state.timeValue + " " + this.state.description);
		event.preventDefault();
	}

	writeUserData(userId, time, message){
		firebase.database().ref('users/' + userId).set({
			time: time,
			message: message
		});
	}

	render(){
		return(
			<Card>
				<label>
					Time:
					<input type="text" value={this.state.timeValue} onChange={this.handleTimeChange} />
					Description:
					<input type="text" value={this.state.descriptionValue} onChange={this.handleDescriptionChange} />
				</label>
				<input type="submit" value="Submit" />
			</Card>
		);
	}
}

export default DatePopup;