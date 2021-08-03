import React from 'react';
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";

const HomeHeader = () => {
    return (
        <>
            <div className="container">
        <div className="loginContainer">
            <Link className="navLogin" to="/logowanie"><a>Zaloguj</a></Link>
            <Link className="navLogin" to="/rejestracja"><a>Załóż Konto</a></Link>
        </div>
            <div className="HeaderWrap">
    <div className="HeaderNav">
        <nav>
            <Link to="/"><a className="FirstHomeLinkStyle">Start</a></Link>
            <HashLink smooth to="/#FourSteps" scroll={(el) => el.scrollIntoView({behavior: 'auto', block: 'end'})}><a>O
                co chodzi?</a></HashLink>
            <HashLink smooth to="/#AboutUs"><a> O nas</a></HashLink>
            <HashLink smooth to="/#Organistations"> <a>Fundacja i organizacje</a></HashLink>
            <HashLink smooth to="/#contact"><a>Kontakt</a></HashLink>
        </nav>
    </div>
                </div>
            </div>
    </>
)
};

export default HomeHeader;