import React, { Component } from 'react';
import Header from '../Header/Header'
import Footer from '../Footer/Footer'

export class Layout extends Component {
	render() {
		return (

			<main>

				<Header></Header>
				
				<section>
					{this.props.children}
				</section>

				<Footer></Footer>

			</main>
		
		);
	}
}

export default Layout;