const players = [
	{

		name: 'Player1',
		id: 1

	}
];

const initialState = {
	players : players
}


function playerReducer(state = initialState, action) {

	if(typeof action === 'undefined') {
		return state;
	}

	switch(action.type) {

		case 'ADD_PLAYER':
			let newState = Object.assign({}, state);
			let id = state.players.length + 1
			newState.players = [
				...state.players,
				{
					name : 'new player' + id,
					id : id
				}
			]
			return newState;
			break;

		default:
			return state;
			break;
	}

	console.log(state);
}

export default playerReducer;