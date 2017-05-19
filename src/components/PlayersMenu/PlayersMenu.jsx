import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Players from '../../data/Players';

export class PlayersMenu extends Component {
	render() {
		return (
			<ul>
				{
					Players.map(Player =>
						<li key={Player.id}>
							<Link to={`/players/${Player.id}`}>{Player.name}</Link>
						</li>
					)
				}
			</ul>	
		);
	}
}


export default PlayersMenu