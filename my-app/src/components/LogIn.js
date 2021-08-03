import React from 'react';
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";

const LogIn = () => {
        return (
    <>
        <HomeHeader></HomeHeader>
        <div className="registerContainer">
            <div className="registerHeader">
                <h1>Załóż konto</h1>
                <img  src={require("../assets/Decoration.svg").default}/>
            </div>
            <form className="RegisterForm">
                <div>
                    <p>Email</p>
                    <input type="email"/>
                    <p>Hasło</p>
                    <input type="password"/>
                 
                </div>
            </form>
            <div className="registerBtn">

                <Link className="navLogin" to="/logowanie"><a>Zaloguj</a></Link>
                <Link className="navLogin" to="/rejestracja"><a>Załóż Konto</a></Link>
            </div>
        </div>
    </>
);
};

export default LogIn;