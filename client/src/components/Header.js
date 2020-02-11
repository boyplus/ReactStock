import React from 'react';
import { Link } from 'react-router-dom';
import GoogleAuth from './GoogleAuth';
const Header = () => {
    return (
        <div className="ui pointing menu">
            <Link to="/" className="item">
                Home
            </Link>
            <Link to="/stocks" className="item">
                Stocks
            </Link>
            <Link to="/portfolio" className="item">
                Portfolio
            </Link>
            <div className="right menu">
                <GoogleAuth></GoogleAuth>
            </div>
        </div>
    );
};

export default Header;
