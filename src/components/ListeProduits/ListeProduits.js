import React from "react";
import "./ListeProduits.css";

export default class ListeProduits extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items :[]
        }
    }

    componentDidMount(){
        fetch("http://127.0.0.1:8000/webservice/php/biere")
            .then(reponse => reponse.json())
            .then((donnees)=>{
                this.setState({items:donnees.data}) 
                console.log(donnees)
            });
    }

    cliquer(){
        console.log(this);
        console.log("click");
    }

    render(){
        const produits = this.state.items.map((item, index)=>{
            return (
                <article onClick={this.cliquer.bind(item)} key={index}>{item.nom}</article>
            );
        })
        console.log(produits);
        return (
            <section>
                <p>Nombre d'item(s) : {this.state.items.length}</p>
                {produits}
            </section>
        );
    }
}