import React from 'react';

import './DetailProduit.css';
import Produit from "../Produit/Produit";

export default class DetailProduit extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailBiere : [],
            note : [],
            commentaires :[],
        }
    }

    componentDidUpdate(){
        console.log("update")
    }

    componentDidMount(){
        console.log("Mount detail")
        const { id } = this.props?.param?.match?.params;
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id)
        .then(response => response.json())
            .then((donnees)=>{
                this.setState({detailBiere:donnees.data})
                console.log(donnees)
                console.log(donnees.data)
            });
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id + "/note")
            .then(response => response.json())
            .then((donnees)=>{
                console.log("id dans fetch note")
                console.log(id)
                this.setState({note:donnees.data})
                console.log(donnees)
                console.log(donnees.data)
            });

        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id + "/commentaire")
        .then(response => response.json())
        .then((donnees)=>{
            this.setState({commentaires:donnees.data})
            console.log(donnees)
            console.log(donnees.data)
        });
    }

    render() {


        const detailBiere = this.state.detailBiere;

        const toto = this.state.note
        console.log("Note")
        console.log(toto)

        const commentaires = this.state.commentaires
        .map((commentaire, index)=>{
            return (
                <article key={index}>
                    <p className='commentaire'>{commentaire.commentaire}</p>
                    <p className='courriel'>Par : {commentaire.courriel}</p>
                </article>

            );
        })
        console.log("Commentaires")
        console.log(commentaires)

//detailBiere['note_moyenne'] = maBiere['note_moyenne'];
console.log("detail")
console.log(detailBiere)
        return (
            <div className='biere_wrapper'>
                <h1>DetailProduit</h1>
                <article className='unProduit init'>
                    <div className='image'>
                        <img src={"../imgProduits/" + detailBiere.id_biere + ".jpg"} />
                    </div>
                    <section className='texte'>
                        <h2>{detailBiere.nom}</h2>
                        <p className='ref'>Ref : {detailBiere.id_biere}</p>
                        <p className='fabricant'>Fabricant : {detailBiere.brasserie}</p>
                        <p className='description'>Description : {detailBiere.description}</p>
                        <p className='note'>Note : {toto.note} ({toto.nombre})</p>
                    </section>
                    <section>
                        <h2>Commentaires</h2>
                        {commentaires}
                        <h3>nouveau commentaire</h3>
                        <form>
                            <input></input>
                        </form>
                    </section>
                </article>
            </div>
        );
    }
}

