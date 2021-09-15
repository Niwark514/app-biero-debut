import React from "react";
import Produit from "../Produit/Produit";
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
        const produits = this.state.items
                            .filter(item => {
                                let bValide = false;
                                if(this.props.id_produit === "tous"){
                                    bValide = true;
                                }else if(this.props.id_produit === "pair" && item.id_biere %2 === 0){
                                    bValide = true;
                                }else if(this.props.id_produit === "impair" && item.id_biere %2 !== 0){
                                    bValide = true;
                                }
                                return bValide;
                            })
                            .map((item, index)=>{
                                return (
                                    //<article onClick={this.cliquer.bind(item)} key={index}>{item.nom}</article>
                                    
                                    <Produit info={item} onClick={this.cliquer.bind(item)} key={index}/>
                                );
                            })

        let sLogin = (this.props.login ? "oui" : "non");
        console.log(produits);
        return (
            <section>
                <p>Suis-je connecté ? {sLogin} </p>
                <section><p>Nombre d'item(s) : {produits.length} Filtre : {this.props.id_produit}</p></section>
                <section className="listeProduit">
                    {produits}
                </section>
            </section>
        );
    }
}