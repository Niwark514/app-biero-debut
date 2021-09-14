import React from "react";
import "./ListeProduits.css";

export default class ListeProduits extends React.Component{
    constructor(props){
        super(props);
    }

    componentDidMount(){
        fetch("http://127.0.0.1:8000/webservice/php/biere")
            .then(reponse => reponse.json())
            .then((donnees)=>{console.log(donnees)});
    }

    render(){
        return (
            <section>
                <article>1</article>
                <article>2</article>
                <article>3</article>
            </section>
        );
    }
}