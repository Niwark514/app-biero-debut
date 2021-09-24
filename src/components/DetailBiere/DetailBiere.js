import React from 'react';

import './DetailBiere.css';
import Biere from "../Biere/Biere";
import App from '../App/App';

export default class DetailBiere extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            detailBiere: [],
            note: [],
            newNote: [],
            newNoteId: [],
            commentaires: [],
            newCommentValue: [],
            newCommentId: [],

        };
       
        this.setNewcommentValue = this.setNewcommentValue.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
        this.setNewNoteValue = this.setNewNoteValue.bind(this);
    }

    componentDidUpdate() {
        console.log("update")

    }

    componentDidMount() {
        console.log("Mount detail")
        const { id } = this.props?.param?.match?.params;
        //Details biere
        this.getUneBiere();
        // Note et nombre de notes
        this.getNote();
        // commentaires et courriels
        this.getCommentaires();
    }

    //Gets

    getUneBiere() {
        const { id } = this.props?.param?.match?.params;
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id)
            .then(response => response.json())
            .then((donnees) => {
                this.setState({ detailBiere: donnees.data })
                console.log(donnees)
                console.log(donnees.data)
            });
    }

    getNote() {
        const { id } = this.props?.param?.match?.params;
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id + "/note")
            .then(response => response.json())
            .then((donnees) => {
                console.log("id dans fetch note")
                console.log(id)
                this.setState({ note: donnees.data })
                console.log(donnees)
                console.log(donnees.data)
            });
    }

    getCommentaires() {
        const { id } = this.props?.param?.match?.params;
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id + "/commentaire")
            .then(response => response.json())
            .then((donnees) => {
                this.setState({ commentaires: donnees.data })
            });
    }

    //Puts

        //Nouveau Commentaire

    async setNewcommentValue(event) {
        await this.setState({ newCommentValue: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();
        this.putUnCommentaire();
    }

    putUnCommentaire() {
        //console.log(this.state.newCommentValue)
        const { id } = this.props?.param?.match?.params;
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));
        const requestOptions = {
            method: 'PUT',
            headers: entete,
            body: JSON.stringify({
                "courriel": this.props.courriel,
                "commentaire": this.state.newCommentValue,
            })
        };
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id + "/commentaire", requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ newCommentId: data.id }));
    }

        //Nouvelle Note

    async setNewNoteValue(event) {
        await this.setState({ newNote: event.target.value });
        //this.putNote();
    }

    putNote() {
        const { id } = this.props?.param?.match?.params;
        const entete = new Headers();
        entete.append("Content-Type", "application/json");
        entete.append("Authorization", "Basic " + btoa("biero:biero"));
        const requestOptions = {
            method: 'PUT',
            headers: entete,
            body: JSON.stringify({
                "courriel": this.props.courriel,
                "note": this.state.newNote,
            })
        };
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id + "/commentaire", requestOptions)
            .then(response => response.json())
            .then(data => this.setState({ newNoteId: data.id }));
        console.log(this.state.newNoteId)
    }

    

    render() {
        const detailBiere = this.state.detailBiere;
        const noteBiere = this.state.note
        

        const commentaires = this.state.commentaires
            .map((commentaire, index) => {
                return (
                    <article className="unCommentaire" key={index}>
                        <p className='commentaire'>{commentaire.commentaire}</p>
                        <p className='courriel'>Par : {commentaire.courriel}</p>
                    </article>

                );
            })
        

        
        return (
            <div className='biere_wrapper'>
                <h1>DetailBiere</h1>
                <article className='uneBiere init'>
                    <div className='image'>
                        <img src={"../imgBieres/" + detailBiere.id_biere + ".jpg"} />
                    </div>
                    <section className='texte'>
                        <h2>{detailBiere.nom}</h2>
                        <p className='ref'>Ref : {detailBiere.id_biere}</p>
                        <p className='fabricant'>Fabricant : {detailBiere.brasserie}</p>
                        <p className='description'>Description : {detailBiere.description}</p>
                        
                    </section>
                    <section>
                        <h3>Note</h3>
                        <p className='note'>Note actuelle moyenne : {noteBiere.note} ({noteBiere.nombre})</p>

                        <div onChange={this.setNewNoteValue} className='radioNote_wrapper'>
                            <p className='description'>Noter cette bière :</p>
                            <div className="radioNote">
                                <input type="radio" id="note-0" name="newNote" value="0"></input>
                                <label for="note-0">0</label>
                            </div>
                            <div className="radioNote">
                                <input type="radio" id="note-1" name="newNote" value="1"></input>
                                <label for="note-1">1</label>
                            </div>
                            <div className="radioNote">
                                <input type="radio" id="note-2" name="newNote" value="2"></input>
                                <label for="note-2">2</label>
                            </div>
                            <div className="radioNote">
                                <input type="radio" id="note-3" name="newNote" value="3"></input>
                                <label for="note-3">3</label>
                            </div>
                            <div className="radioNote">
                                <input type="radio" id="note-4" name="newNote" value="4"></input>
                                <label for="note-4">4</label>
                            </div>
                            <div className="radioNote">
                                <input type="radio" id="note-5" name="newNote" value="5"></input>
                                <label for="note-5">5</label>
                            </div>
                        </div>
                    </section>
                </article>
                <section className="commentaires">
                    <h2>Commentaires</h2>
                    {commentaires}
                    <h3>Nouveau commentaire</h3>
                    <form onSubmit={this.handleSubmit} className='formCommentaire'>
                        <textarea placeholder="Votre commentaire" rows="10" maxLength="250" value={this.state.newCommentValue} onChange={this.setNewcommentValue}></textarea>
                        <input type="submit" value="Envoyer"></input>
                    </form>
                </section>
            </div>
        );
    }
}

