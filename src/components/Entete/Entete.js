import React from 'react';
import BoutonNav from '../BoutonNav/BoutonNav';
import './Entete.css';

export default class Entete extends React.Component{
  constructor(props){
    super(props);
    console.log(this.props.titre);
    //this.props.titre = "Titre par défaut";  // Lecture seule
    this.compte = 10;
  }

  boutonCliquer(){
      console.log("Click");
      console.log(this);
      //cd this.compte++;
  }

  render() {
    return (  
            <div>
                <h1 className="test">{this.props.titre}</h1>
                <button onClick={this.boutonCliquer}>Cliquez ici ({this.compte})</button>
                <nav>
                    <ul>
                        <li><BoutonNav lien="#1" label="Item 1"/></li>
                        <li><BoutonNav lien="#2" label={this.props.titre}/></li>
                        <li><BoutonNav lien="#2" label="Item 100"/></li>
                    </ul>
                </nav>
            </div>
        );
  }
}
