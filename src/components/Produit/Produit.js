import React from "react";
import "./Produit.css";

export default class Produit extends React.Component{
    constructor(props){
        super(props);
       
    }

    render(){
        //const prix = (this.props.info.prix ? <p>Prix : {this.props.info.prix}</p> : "");
            //(condition ? si vrai : si faux)
        
        let prix = "";
        if(this.props.info.prix){
            prix = <p>Prix : {this.props.info.prix}</p>;
        }
        else{
            prix = <p>Produit non vendu</p>;
        }
        

        return (
            <article className="produit">
                <p>Nom : {this.props.info.nom}</p>
                <p>Fabricant : {this.props.info.brasserie}</p>
                {prix}
            </article>
        );
    }
}