import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BoutonNav from '../BoutonNav/BoutonNav';
import './Entete.css';
import App from '../App/App';


export default class Entete extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props);
    //this.props.titre = "Titre par défaut";  // Lecture seule
    
    this.state = {
                  courriel : "",
                  login : false
                }; // Le state contient les données du composant.


    //this.changeCourriel = this.props.changeCourriel.bind(this)
    this.login = this.login.bind(this);
  }

	login(){
		let bLogin = false;
		if(this.state.login && this.props.courriel){
			bLogin =false;
			console.log("login false")
			this.setState(this.props.changeCourriel);
			console.log(this.props.courriel)
			
		}
		else if(!this.state.login && this.props.courriel){ // Si le courriel est non vide (non sécuritaire)!
        	bLogin = true;
			console.log("login true")
			console.log(this.props.courriel)
        }
		this.setState({login:bLogin});
		if(this.props.login){
			this.props.login(bLogin);
		}
	}

  	render() {
		// Il peut y avoir du code ici...
		const titre = this.props.titre || "titre par défaut";
		const login = (this.state.login ? "connecté" : "non connecté"); 
		let btnLogin = <button onClick={this.login}>{(this.state.login ? "Se déconnecter" : "Se connecter")}</button>;

		return (
			<header className="App-header">
				<nav>
					<div className="top-nav">
						<div className="barre">
							<Link className="logo" to="/">
								B<span>iero</span>
							</Link>
							<span className="flex-spacer"></span>
							<p className="menu-mobile"></p>
						</div>
						<span className="flex-spacer"></span>
						<ul>
							<li>
								<NavLink activeClassName="active" to="/biere">Les bières</NavLink>
							</li>
							<li>
							<input name="courriel" value={this.props.courriel} disabled={this.state.login ? 'disable' : ''} onChange={this.props.changeCourriel} type="text" />
							{btnLogin}
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
