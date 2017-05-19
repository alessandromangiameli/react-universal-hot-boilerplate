import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { Route, Switch } from 'react-router-dom';
import Layout from '../Layout/Layout'
import Home from '../../views/Home/Home'
import Players from '../../views/Players/Players'
import Player from '../../views/Player/Player'
import NotFound from '../../views/NotFound/NotFound'

import PlayersData from '../../data/Players'

const renderPlayer = ({ match, staticContext }) => {

	const id = parseInt(match.params.id);
	const player = PlayersData.find(p => p.id === id);

	if (player) return <Player player={player} />;

	return <NotFound staticContext={staticContext} />;

};

export class App extends Component {
	render() {
		return (

			<Layout>

				<Switch>
					<Route exact path='/' component={Home}></Route>
					<Route exact path='/players' component={Players}></Route>
					<Route exact path='/players/:id' render={renderPlayer}></Route>
					<Route component={NotFound}></Route>
				</Switch>
	
			</Layout>
		
		);
	}
}

export default App;