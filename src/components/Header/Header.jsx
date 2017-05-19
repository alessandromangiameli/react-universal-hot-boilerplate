import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Players from '../../data/Players';
import PlayersMenu from '../PlayersMenu/PlayersMenu';

export class Header extends Component {
	render() {
		return (
			<header>
				<nav>
					<ul>
						<li>
							<Link to="/">Homepage</Link>
						</li>
						<li>
							<Link to="/players">Players</Link>
							<PlayersMenu></PlayersMenu>
						</li>
					</ul>
				</nav>
			</header>
		);
	}
}


export default Header