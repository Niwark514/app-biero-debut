//Après avoir cloné le dépot (git), faire : npm install
import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduits from '../ListeProduits/ListeProduits';

import './App.css';

export default class App extends React.Component{
	constructor(props){
    	super(props);

		this.state = {
			courriel : "",
			login : false
		}

    	//this.changeCourriel = this.changeCourriel.bind(this)
    	this.login = this.login.bind(this);
	}

	login(etatLogin){
		this.setState({login : etatLogin});
  	}

	/*changeCourriel(evt){
		this.setState({courriel:evt.target.value});
	}*/

	render() {
		return (  // JSX
		<main>
			<Entete titre="Site React" login={this.login} />
			<ListeProduits login={this.state.login} filtre="pair" />
			<ListeProduits login={this.state.login} filtre="impair"/>
			<ListeProduits login={this.state.login} filtre="tous" note_min="2" note_max="3.5"/>
		</main>
		);
	}
}
