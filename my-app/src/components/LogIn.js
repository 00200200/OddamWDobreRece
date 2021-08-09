import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";

const LogIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const handleSubmit = async (e) => {
        e.preventDefault()
        if (!email) {
            setEmailError("E-mail jest wymagany")

        } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            setEmailError("E-Mail jest nieprawidłowy")
        } else (setEmailError(null))
        if (!password) {
            setPasswordError("Hasło jest wymagane")

        } else if (password.length < 5) {
            setPasswordError("Hasło jest za krótkie")
        } else (setPasswordError(null))
    }
    return (
        <>
            <HomeHeader></HomeHeader>
            <div className="registerContainer">
                <div className="registerHeader">
                    <h1>Załóż konto</h1>
                    <img src={require("../assets/Decoration.svg").default}/>
                </div>
                <form className="RegisterForm">
                    <div>
                        <p>Email</p>
                        <p style={{color:"red"}}>{emailError}</p>
                        <input onChange={e => setEmail(e.target.value)} type="email"/>
                        <p>Hasło</p>
                        <p  style={{color:"red"}}>{passwordError}</p>
                        <input onChange={e => setPassword(e.target.value)} type="password"/>

                    </div>
                </form>
                <div className="registerBtn">

                    <Link onClick={handleSubmit} className="navLogin" to="/logowanie"><a>Zaloguj</a></Link>
                    <Link className="navLogin" to="/rejestracja"><a>Załóż Konto</a></Link>
                </div>
            </div>
        </>
    );
};

export default LogIn;