import React from "react";
import Biere from "../Biere/Biere";
import "./ListeBieres.css";

export default class ListeBieres extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            items :[],
            login :[],
        }
    }

    componentDidMount(){
        console.log("Mount liste")
        fetch("http://127.0.0.1:8000/webservice/php/biere")
            .then(response => response.json())
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
        console.log(this.state)
        console.log(this.props)
        const bieres = this.state.items
                            /* .filter(item => {
                                let bValide = false;
                                if(this.props.filtre === "tous"){
                                    bValide = true;
                                }else if(this.props.filtre === "pair" && item.id_biere %2 === 0){
                                    bValide = true;
                                }else if(this.props.filtre === "impair" && item.id_biere %2 !== 0){
                                    bValide = true;
                                }
                                return bValide;
                            }) */
                            .filter(item => {
                                let bValide = false;
                                if(this.props.note_min &&  this.props.note_max){
                                    if(parseFloat(this.props.note_min) <= parseFloat(item.note_moyenne) && parseFloat(this.props.note_max) >= parseFloat(item.note_moyenne) ){
                                        bValide = true;
                                    }
                                }
                                else{
                                    bValide = true;
                                }
                                return bValide;
                            })
                            .map((item, index)=>{
                                return (
                                    //<article onClick={this.cliquer.bind(item)} key={index}>{item.nom}</article>
                                    
                                    <Biere info={item} onClick={this.cliquer.bind(item)} key={index}/>
                                );
                            })

        let sLogin = (this.props.login ? "oui" : "non");
        return (
            <section>
                <p>Suis-je connecté ? {sLogin} </p>
                <section><p>Nombre d'item(s) : {bieres.length} Filtre : {this.props.id_biere}</p></section>
                <section className="listeBiere">
                    {bieres}
                </section>
            </section>
        );
    }
}