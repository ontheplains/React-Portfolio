import React from 'react'
import { Router, Route, Link, browserHistory } from 'react-router';

const Nav = ({user}) => {
    return (
        <nav className="main-profile-header navbar navbar-default navbar-fixed-top">
            <div className="container">
                <Link to={'/profile'}>Profile</Link>
                <Link to={'/'}>Home</Link>
            </div>
        </nav>
    )
};

export default Nav
