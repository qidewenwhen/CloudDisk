import React, { Component } from 'react';
import Col from 'react-bootstrap/lib/Col';
import './MainPanel.css';

class MainPanel extends Component {
	render() {
		return (
			<Col md = {4}>
				<h3>{ this.props.title }</h3>
			</Col>
		);
	}
}

export default MainPanel;