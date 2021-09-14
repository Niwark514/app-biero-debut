import React from "react";
import "./Produit.css";

export default class Produit extends React.Component{
    constructor(props){
        super(props);
       
    }

   

    render(){
        return (
            <article className="produit">
                <p>Nom : {this.props.info.nom}</p>
                <p>Fabricant : {this.props.info.brasserie}</p>
                <p>Prix : {this.props.info.prix}</p>
            </article>
        );
    }
}