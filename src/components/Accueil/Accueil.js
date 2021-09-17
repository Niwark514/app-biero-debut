import React from 'react';
import { Link } from 'react-router-dom';

import './Accueil.css';

export default class Accueil extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
			<div className="pageAccueil">
				<div className="contenu">
					<div className="bandeau">
						<Link to="/produit" className="btnAction">Notre sélection de produit</Link>
					</div>
					<div className="arguments">
						<div>Argument 1 : 
                            <p>Pourquoi utiliser notre application?</p><p>Lorem ipsum...</p>
                        </div>
						<div>Argument 2 
                            <p>Pourquoi utiliser notre application?</p><p>Lorem ipsum...</p>
                        </div>
						<div>Argument 3 
                            <p>Pourquoi utiliser notre application?</p><p>Lorem ipsum...</p>
                            </div>
					</div>
				</div>
			</div>
		);
    }
}