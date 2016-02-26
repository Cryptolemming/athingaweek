import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

'use strict';

var styles = {
	infoWindow: {
		marginTop: '45px',
		background: 'rgba(255,255,255,.8)',
		width: '90vw',
		height: '75vh',
		borderRadius: 15,
		border: '1px solid #b1e556'
	},
	tabs: {
		bottom: 0,
		position: 'fixed',
		fontSize: '16px',
		fontFamily: 'Serif',
		fontWeight: 'bold',
		color: 'rgba(255,255,255,.9)',
		textAlign: 'center',
	},
	tabWork: {
		float: 'left',
		marginLeft: '5vw',
		width: '150px',
		background: '#388e3c',
		padding: '5px',
		borderRadius: '15px 15px 0 0',
		border: '1px solid #b1e556',
	},
	tabChat: {
		float: 'right',
		width: '100px',
		marginLeft: '5vw',
		marginRight: '5vw',
		background: '#388e3c',
		padding: '5px',
		borderRadius: '15px 15px 0 0',
		border: '1px solid #b1e556',
	},
	tabWorkSelected: {
		top: '210px',
		position: 'fixed',
		float: 'left',
		marginLeft: '5vw',
		marginRight: '15px',
		width: '150px',
		background: '#388e3c',
		padding: '5px',
		borderRadius: '15px 15px 0 0',
		border: '1px solid #b1e556',
	},
	tabChatSelected: {
		top: '210px',
		position: 'fixed',
		float: 'right',
		width: '100px',
		marginLeft: '20vw',
		background: '#388e3c',
		padding: '5px',
		borderRadius: '15px 15px 0 0',
		border: '1px solid #b1e556',
	},
	a: {
		fontSize: 12,
	}
};

var App = Radium(React.createClass({

	getInitialState() {
		return {
			infoWindow: false,
			tabWork: false,
			tabChat: false,
		}
	},

	_onClickWork() {
		var workUpdate
			= this.state.infoWindow
			? false
			: true;

		this.setState({
			infoWindow: workUpdate,
			tabWork: workUpdate,
		});
	},

	_onClickChat() {
		var chatUpdate
			= this.state.infoWindow
			? false
			: true;
		this.setState({
			infoWindow: chatUpdate,
			tabChat: chatUpdate,
		});
	},
	
	render() {

		var activateInfoWindow 
			= this.state.infoWindow 
			? <div style={styles.infoWindow}></div>
			: <div></div>;

		var tabWorkStyle 
			= this.state.tabWork && !this.state.tabChat
			? styles.tabWorkSelected
			: styles.tabWork;

		var tabChatStyle 
			= this.state.tabChat && !this.state.tabWork
			? styles.tabChatSelected
			: styles.tabChat;

		return(
			<div>
				<h1>Sustainable Design</h1>
				<p>Tomorrow's Technologies.  Today's Solutions.</p>
				{activateInfoWindow}
				<div style={styles.tabs}>
					<a href='#'>
						<div style={tabWorkStyle} onClick={this._onClickWork}>See Our Work</div>
					</a>
					<a href='#'>
						<div style={tabChatStyle} onClick={this._onClickChat}>Let's Chat</div>
					</a>
				</div>
			</div>
		);
	}
}));

ReactDOM.render(<App />, document.getElementById('main'));

