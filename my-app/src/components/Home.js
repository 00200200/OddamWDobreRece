import {BrowserRouter as Router, Switch, Route, Link} from 'react-router-dom'
import React from 'react';
import HeroImage from "../assets/Hero Image.png"
import Decoration from "../assets/Decoration.svg"

const Home = () => {
    return (
        <div className="container">
            <div className="loginContainer">
                <Link className="navLogin" to="/logowanie"><a>Zaloguj</a></Link>
                <Link className="navLogin" to="/rejestracja"><a>Załóż Konto</a></Link>
            </div>
            <div className="HeaderContainer">
                <div className="HeaderLeftSideContainer">
                    <img src={require("../assets/Hero Image.png").default} className="headerBackground"/></div>
                <div className="HeaderRightSideContainer">
                <div className="HeaderNav">
                    <nav>
                        <a>Start</a>
                        <a>O co chodzi?</a>
                        <a>O nas</a>
                        <a>Fundacja i organizacje</a>
                        <a>Kontakt</a>
                    </nav>
                </div>
                <div className="underNavContainer">
                    <h1>Zacznij pomagać<br></br>
                    Oddaj niechciane rzeczy w zaufane ręcę</h1>
                    <img src={require("../assets/Decoration.svg").default}/>
                    <div className="RightSideLinks">
                        <Link className="RightSideRouter" to="/logowanie"><a>Oddaj<br></br> Rzeczy</a></Link>
                        <Link className="RightSideRouter" to="/logowanie"> <a>Zorganizuj<br></br> Zbiórkę</a></Link>
                    </div>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Home;