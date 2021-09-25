//Après avoir cloné le dépot (git), faire : npm install
import React from 'react';
import Entete from '../Entete/Entete';
import ListeBieres from '../ListeBieres/ListeBieres';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Accueil from '../Accueil/Accueil';
import DetailBiere from '../DetailBiere/DetailBiere';

export default class App extends React.Component{
	constructor(props){
    	super(props);

		this.state = {
			courriel : "",
			login : false
		}

    	this.changeCourriel = this.changeCourriel.bind(this)
    	this.login = this.login.bind(this);

	}

	login(etatLogin){
		this.setState({login : etatLogin});
  	}

	changeCourriel(evt){
		this.setState({courriel:evt.target.value});
		console.log(this.state)
	}

	render() {
		
		return (  // JSX
			<Router>
				<Entete  login={this.login} courriel={this.state.courriel} changeCourriel={this.changeCourriel} onChange={this.changeCourriel} titre="page accueil"/>
				<Switch>
					<Route exact path="/" component={Accueil} />
					<Route exact path="/biere">
						<ListeBieres login={this.state.login}/>
					</Route>
					<Route exact path= "/biere/:id" render={(param_route)=><DetailBiere login={this.state.login} courriel={this.state.courriel} {...param_route} id={param_route?.match?.params?.id} param={param_route} />}/>
					<Route exact path="*" render={()=><p>Page non trouvée</p>} />
				</Switch>
			</Router>
		
		);
	}
}
