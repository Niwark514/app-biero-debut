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

    this.changeCourriel = this.changeCourriel.bind(this)
    this.login = this.login.bind(this);
  }

  login(){
    this.setState((state, props)=> {
            let bLogin = false;
            if(state.courriel){ // Si le courriel est non vide (non sécuritaire)!
                bLogin = true;
            }
            return {login : bLogin};
          }
      );
  }

  changeCourriel(evt){
    this.setState({courriel:evt.target.value});
  }

  render() {
    return (  // JSX
      <main>
        <Entete titre="Site React" changeCourriel={this.changeCourriel} login={this.login} />
        <ListeProduits login={this.state.login} id_produit="pair"/>
        <ListeProduits login={this.state.login} id_produit="impair"/>
      </main>
    );
  }
}
