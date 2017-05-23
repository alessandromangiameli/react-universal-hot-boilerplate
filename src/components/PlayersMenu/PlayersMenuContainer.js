import {connect} from 'react-redux'
import PlayersMenu from './PlayersMenu'
import addPlayer from '../../actions/addPlayer';

const container = (players)  => {
	return players;
}

const mapStateToProps = (state) => {
	return {
		players : container(state.players)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		onAddPlayer : () => {
			dispatch(new addPlayer());
		}
	}
}

const PlayersMenuContainer = connect(mapStateToProps, mapDispatchToProps)(PlayersMenu);

export default PlayersMenuContainer;

