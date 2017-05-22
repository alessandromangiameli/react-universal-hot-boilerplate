import React, { Component } from 'react';
import { Link } from 'react-router-dom';

export class PlayersMenu extends Component {
	constructor(props) {
		super(props);
	}

	render() {
		return (
			<div>
				<ul>
					{
						this.props.players.map(Player =>
							<li key={Player.id}>
								<Link to={`/players/${Player.id}`}>{Player.name}</Link>
							</li>
						)
					}
				</ul>
				<a href="#" onClick={this.props.onAddPlayer}>add</a>	
			</div>
		);
	}
}


export default PlayersMenu