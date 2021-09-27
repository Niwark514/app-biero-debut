import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import BoutonNav from '../BoutonNav/BoutonNav';
import './Entete.css';
import App from '../App/App';
import logo from '../../bieroLogo.svg';


export default class Entete extends React.Component {
  constructor(props){
    super(props);

    this.state = {
                  courriel : "",
                  login : false,
				  errorMessage :"",
                };
    this.login = this.login.bind(this);
	this.courrielIsValid=this.courrielIsValid.bind(this);
  }

	login(){
		let bLogin = false;
		console.log(this.props)
		if(this.state.login && this.props.courriel){//si j'ai déja un courriel dans props et que login est vrai dans state (je suis déja connecté)
			bLogin =false;
			this.setState({courriel:""});

		}
		else if(!this.state.login && this.props.courriel){ // Si le courriel est non vide (non sécuritaire)!
			let estValide = this.courrielIsValid(this.props.courriel);
			console.log(this.state.errorMessage)
			if (estValide) {
				bLogin = true;
				this.setState({errorMessage :""})
			}else{
				this.setState({errorMessage :"La forme du courriel n'est pas valide"})
			}
        }
		this.setState({login:bLogin});
		if(this.props.login){
			this.props.login(bLogin);
		}
	}

courrielIsValid(courriel){

const courrielRegex = /^[a-zA-Z]+@[a-zA-Z]/
		if(courrielRegex. test(courriel)){
		return true;
		}else{
		return false;
		}

}


	
  	render() {
		
		const titre = this.props.titre || "titre par défaut";
		const login = (this.state.login ? "connecté" : "non connecté");
		let btnLogin = <button onClick={this.login}>{(this.state.login ? "Se déconnecter" : "Se connecter")}</button>;

		return (
			<header className="App-header">
				<nav>
					<div className="top-nav">
						<div className="barre">
							<Link className="logo" to="/">

									<img className="imgLogo" src={logo} alt="Logo Biero"/>

							</Link>
							<span className="flex-spacer"></span>
							<p className="menu-mobile"></p>
						</div>
						<span className="flex-spacer"></span>
						<ul>
							<li>
								<NavLink activeClassName="active" to="/biere">Les bières</NavLink>
							</li>
							<li><span className="errorMessage">{this.state.errorMessage}</span>
							<input name="courriel" value={!this.courrielIsValid? this.errorMessage : this.props.courriel} disabled={this.state.login ? 'disable' : ''} onChange={this.props.changeCourriel} type="text" />
							{btnLogin}
							</li>
						</ul>
					</div>
				</nav>
			</header>
		);
	}
}
