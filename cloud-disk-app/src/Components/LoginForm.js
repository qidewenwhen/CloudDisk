import React, { Component } from 'react';
import './LoginForm.css';

import Col from 'react-bootstrap/lib/Col';
import FormGroup from 'react-bootstrap/lib/FormGroup';
import FormControl from 'react-bootstrap/lib/FormControl';

class LoginForm extends Component {
	constructor(props) {
		super(props);
		this.handleSumbit = this.handleSubmit.bind(this);/////???
	}
	handleSubmit(e) {//////???
		e.preventDefault();
	}
	render() {
		return (
			<Col md = {4} mdOffset = {4}>
				<h3>Login</h3>
				<form id = "loginForm" onSubmit = { this.handleSubmit }>
					<FormGroup>
						<FormControl type = "text" placeholder = "Email"/>
					</FormGroup>
					<FormGroup>
						<FormControl type = "password" placeholder = "Password" />
					</FormGroup>
					<FormGroup>
						<FormControl id = "submitButton" type = "submit" value = "Login"/>
					</FormGroup>
				</form>
			</Col>
		);
	}
}

export default LoginForm;