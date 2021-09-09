//Après avoir cloné le dépot (git), faire : npm install
import React from 'react';
import Entete from '../Entete/Entete';
import './App.css';

export default class App extends React.Component{

  render() {
    return (  // JSX
      <Entete titre="Site React"/>
    );
  }
}
