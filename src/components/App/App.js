//Après avoir cloné le dépot (git), faire : npm install
import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduits from '../ListeProduits/ListeProduits';

import {Route, Switch, BrowserRouter as Router} from 'react-router-dom';

import Accueil from '../Accueil/Accueil';
import DetailProduit from '../DetailProduit/DetailProduit';

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
				<Entete titre="page accueil"/>
				<Switch>
					<Route exact path="/" component={Accueil} />
						
					
					<Route exact path="/produit" >	
						<ListeProduits login={this.state.login} filtre="tous"/>
					</Route>
					<Route exact path= "/produit/:id" render={(param_route)=><DetailProduit {...param_route} id={param_route?.match?.params?.id} param={param_route} />}/>
					<Route exact path="*" render={()=><p>Page non trouvée</p>} />
				</Switch>
			</Router>
		
		);
	}
}
