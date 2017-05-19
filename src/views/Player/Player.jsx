import React, { Component } from 'react';

export class Player extends Component {
	render(player) {
		
		return (
			<div>
				Player {this.props.player.name}
			</div>
		);
	}
}


export default Player