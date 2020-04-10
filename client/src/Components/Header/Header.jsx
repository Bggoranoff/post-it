import React from 'react';
import Link from '../Link/Link';
import './Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser } from '@fortawesome/free-solid-svg-icons';
function Header({ isLogged, user }) {
    return (
        <header className="header">
            <Link className="active link" to="/posters">HOME</Link>
            {!isLogged && <Link to="/login" className="link">LOGIN</Link>}
            {!isLogged && <Link to="/register" className="link">REGISTER</Link>}
            {isLogged && <Link to="/create-poster" className="link">CREATE</Link>}
            {isLogged && <Link to='/logout'>LOGOUT</Link>}
            <Link to="/about" className="link">ABOUT</Link>
            {isLogged && <div className="header-right">
                <Link to={`/profile/${user._id}`} className="link"><FontAwesomeIcon icon={faUser} /></Link>
            </div>}
        </header>
    );
}

export default Header;