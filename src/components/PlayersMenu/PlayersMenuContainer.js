import {connect} from 'react-redux'
import PlayersMenu from './PlayersMenu'

const container = (players)  => {
	return players;
}

const addPlayer = {
	type : 'ADD_PLAYER',
	data: {
		name : 'Player'
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return {
		players : state.players
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPlayer : () => {
			dispatch(addPlayer);
		}
	}
}

const PlayersMenuContainer = connect(mapStateToProps, mapDispatchToProps)(PlayersMenu);

export default PlayersMenuContainer;

