const initialState = [
	{

		name: 'Player1',
		id: 1

	}
];

function playerReducer(state = initialState, action) {

	if(typeof action === 'undefined') {
		return state;
	}

	switch(action.type) {

		case 'ADD_PLAYER':
			let newState = Object.assign({}, state);
			let id = state.length + 1
			newState = [
				...state,
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