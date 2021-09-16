import React from 'react';

import './Accueil.css';

class Accueil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className='accueil_wrapper'>
                <h1>Accueil</h1>
            </div>
        );
    }
}

export default Accueil;