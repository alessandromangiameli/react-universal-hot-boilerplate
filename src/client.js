import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { BrowserRouter as Router } from 'react-router-dom'
import { createStore} from 'redux'
import { Provider } from 'react-redux'
import App from './components/App/App'
// import playerReducer from './reducers/playerReducer'
import reducer from './reducers/reducer';

let store = createStore(reducer);

const render = () => {
	ReactDOM.render(
		<AppContainer>
			<Provider store={store}>		
				<Router>
					<App />
				</Router>
			</Provider>
		</AppContainer>,
		document.getElementById('root')
	);
}

render(App)

if (module.hot) module.hot.accept('./components/App/App', () => {
	render(require('./components/App/App'))
})