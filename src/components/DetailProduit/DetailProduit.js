import React from 'react';

import './DetailProduit.css';

export default class DetailProduit extends React.Component {
    constructor(props) {
        super(props);
    }

    componentDidUpdate(){
        console.log("update")
    }

    componentDidMount(){
        console.log("Mount")
        const { id } = this.props?.param?.match?.params;
        fetch("http://127.0.0.1:8000/webservice/php/biere/" + id)
        .then(reponse => reponse.json())
        //.then() Faire un setState... 
    }

    render() {
        console.log(this.props);
        const { id } = this.props?.param?.match?.params;
        //const id2 = this.props?.param?.match?.params?.id;
        //const id3 = this.props && this.props.param && this.props.param.match && this.props.param.match.params && this.props.param.match.params.id;
        //console.log(id, id2, id3);

        return (
            <div className='contact_wrapper'>
                <h1>DetailProduit</h1>
            </div>
        );
    }
}

