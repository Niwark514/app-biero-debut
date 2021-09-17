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
        

        return (
            <Link to={"/produit/"+this.props.info.id_biere}>
                <article className='unProduit init'>
                    <div className='image'><img src="204x204.png" /></div>
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