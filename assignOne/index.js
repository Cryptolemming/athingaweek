import React from 'react';
import ReactDOM from 'react-dom';
import Radium from 'radium';

'use strict';

var App = Radium(React.createClass({
	
	render() {

		return(
			<div>
				<h1>Sustainable Design</h1>
				<p>Tomorrow's Technologies.  Today's Solutions.</p>
				<div style={styles.infoWindow}></div>
				<div id='buttons'>
					<a href='#'><div id='button-work'>See Our Work</div></a>
					<a href='#'><div id='button-chat'>Let's Chat</div></a>
				</div>
			</div>
		);
	}
}));

ReactDOM.render(<App />, document.getElementById('main'));

var styles = {
	infoWindow: {
		background: 'blue',
		width: '90vw',
		height: '90vh',
	}
};