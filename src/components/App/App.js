//Après avoir cloné le dépot (git), faire : npm install
import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduits from '../ListeProduits/ListeProduits';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import './App.css';
import Accueil from '../Accueil/Accueil';
import Contact from '../Contact/Contact';

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

		//https://reactrouter.com/web/
		/*<main>
			<Entete titre="Site React" login={this.login} />
			<ListeProduits login={this.state.login} filtre="pair" />
			<ListeProduits login={this.state.login} filtre="impair"/>
			<ListeProduits login={this.state.login} filtre="tous" note_min="2" note_max="3.5"/>
		</main>*/
		return (  // JSX
			<Router>
				<Route path="/">
					<Accueil />
				</Route>
				<Route path="/contact" component={Contact} />

				<Route path= "/information" render={()=><h1>Information</h1>}/>

			</Router>
		
		);
	}
}
