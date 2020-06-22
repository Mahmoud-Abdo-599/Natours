import React, { Fragment } from 'react';
import '../sass/abstracts/_variables.scss'

const Header = () => {
    return (
        <Fragment>
            <header className="header">
                <div className="header__logo-box">
                    <img src="../img/logo-white.png" alt="logo" className="header__logo" />
                </div>
                <div className="header__text-box">
                    <h1 className="heading-primary">
                        <span className="heading-primary--main">Outdoors</span>
                        <span className="heading-primary--sub">is where life happens</span>
                    </h1>
                    <a href="#section-tours" className="btn btn--white btn--animated">Discover our tours</a>
                </div>
            </header>
        </Fragment>
    )
}

export default Header;
