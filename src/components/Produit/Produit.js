import React from "react";
import { Link } from "react-router-dom";
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

        // !!! attention vérifier si le fichier image existe sinon afficher une image par défaut
        //const imgProduit = (this.props.info.id_biere ? this.props.info.id_biere : "204x204.jpg");

        return (
            <Link to={"/produit/"+this.props.info.id_biere}>
                <article className='unProduit init'>
                    <div className='image'>
                        <img src={"imgProduits/" + this.props.info.id_biere + ".jpg"} />
                    </div>
                    <div className='texte'>
                        <p className='nom'>Nom : {this.props.info.nom} ({this.props.info.id_biere})</p>
                        <p>Fabricant : {this.props.info.brasserie}</p>
                        {prix}
                        <p>Note : {this.props.info.note_moyenne}</p>
                    </div>
                </article>
            </Link>
        );
    }
}