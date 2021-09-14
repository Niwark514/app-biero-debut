import React from 'react';
import BoutonNav from '../BoutonNav/BoutonNav';
import './Entete.css';

export default class Entete extends React.Component {
  constructor(props){
    super(props);
    console.log(this.props.titre);
    //this.props.titre = "Titre par défaut";  // Lecture seule
    //this.compte = 10;
    this.state = {compte:10}; // Le state contient les données du composant.
    this.boutonCliquer = this.boutonCliquer.bind(this);
  }

  boutonCliquer(){
      console.log("Click");
      console.log(this);
      //this.setState({compte:this.state.compte+1});  // À ne pas faire, parce que le setState est asynchrone!
      
      /*this.setState(function(state, props){
                      return {
                        compte : state.compte+1
                      };
                    });*/
      this.setState((state)=>({compte:state.compte+1}))
  }

  render() {
    // Il peut y avoir du code ici...
    const titre = this.props.titre || "titre par défaut";
    
    return (  
            <div>
                <h1 className="test">{titre}</h1>
                <h1 className="test">{this.props.titre || "titre par défaut"}</h1>
                <button onClick={this.boutonCliquer}>Cliquez ici ({this.state.compte})</button>
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
