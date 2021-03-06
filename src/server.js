/* eslint no-console: "off"*/

import path from 'path';
import Express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter as Router } from 'react-router-dom';
import { App } from './components/App/App';

const app = new Express();

// use ejs templates
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

let isDevelopment = process.env.NODE_ENV === 'development';

import webpackDevMiddleware from 'webpack-dev-middleware'
import webpackHotMiddleware from 'webpack-hot-middleware';
import webpack from 'webpack';
import webpackConfig from '../webpack.config';

if (isDevelopment) {

	const compiler = webpack(webpackConfig);

	app.use(webpackDevMiddleware(compiler, {
		publicPath: webpackConfig.output.publicPath,
		hot: true,
		stats: {
			colors: true
		}
	}));

	app.use(webpackHotMiddleware(compiler, {
		reload: true
	}));

} else {
	
	// define the folder that will be used for static assets
	app.use(Express.static(path.join(__dirname, '..', 'dist')));

}

// universal routing and rendering
app.get('*', (req, res) => {
	let markup = '';
	let status = 200;

	if (process.env.UNIVERSAL) {
		const context = {};
		markup = renderToString(
			<Router location={req.url} context={context}>
				<App />
			</Router>,
		);

		// context.url will contain the URL to redirect to if a <Redirect> was used
		if (context.url) {
			return res.redirect(302, context.url);
		}

		if (context.is404) {
			status = 404;
		}
	}

	return res.status(status).render('index', { markup });
});

// start the server
const port = process.env.PORT || 3000;
const env = process.env.NODE_ENV || 'production';

app.listen(port, (err) => {
	if (err) {
		return console.error(err);
	}
	return console.info(
		`
			Server running on http://localhost:${port} [${env}]
			Universal rendering: ${process.env.UNIVERSAL ? 'enabled' : 'disabled'}
		`);
});
