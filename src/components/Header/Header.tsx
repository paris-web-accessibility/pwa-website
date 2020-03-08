import React from 'react';
import { Link } from 'react-router-dom';
import './Header.scss';

const Header: React.FC = () => (
    <header className="header">
        <div className="header__logo">
            Paris Web Accessibility
        </div>
        <nav>
            <Link to="/">Accueil</Link>
            <Link to="">Proposer un sujet</Link>
            <Link to="/partenaire">Partenaires</Link>
        </nav>
    </header>
);

export default Header;
