//Après avoir cloné le dépot (git), faire : npm install
import React from 'react';
import Entete from '../Entete/Entete';
import ListeProduits from '../ListeProduits/ListeProduits';

import './App.css';

export default class App extends React.Component{

  render() {
    return (  // JSX
      <main>
        <Entete titre="Site React"/>
        <ListeProduits />
      </main>
    );
  }
}
