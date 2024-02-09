import React from 'react';
import { NavLink } from 'react-router-dom';

const WelcomeContent = () => {
    return (
        <div className="header__wrapper">
                <h1 className="header__title">
                    <strong>Welcome to <em>gdaget rating</em> service</strong><br/>
                </h1>
                <div className="header__text">
                    <p>Here you can choose a new gadget for yourself</p>
                    <p>or rate your personal.</p>
                </div>
                <NavLink to={`/signup`} >
                    <a href="#!" className="btn">Sign up</a>
                </NavLink>
                <br/>
                <NavLink to={`/login`} >
                    <a href="#!" className="header_text">or login</a>
                </NavLink>
        </div>
    );
};

export default WelcomeContent;