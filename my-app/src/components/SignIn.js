import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";


// const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
const validate = form => {
    if(!form.email){
        return "E-mail jest wymagany"
    } else if(! /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(form.email)){
        return "E-mail jest nieprawidłowy"
    }
    if(!form.password){
        return "Hasło jest wymagane"
    }else if (form.password.length <5) {
        return "Hasło jest za krótkie"
    }
    if (!form.passwordRep){
        return "Powtórz hasło"
    }else if (!form.passwordRep.length <5){
        return "Hasło jest za krótkie"
    }

    if (!form.password !== !form.passwordRep){
        return "Hasla nie są identyczne";
    }
}

const SignIn = () => {
    const [error,setError] = useState(null);
    const [form,setForm] = useState({
        email:'',
        password: '',
        passwordRep:''
    });
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log('form submitted',form)

    }

    const updateField = (e) => {
        setForm({
            ...form,
             [e.target.email]:e.target.value,
            [e.target.password]:e.target.value,
            [e.target.passwordRep]:e.target.value,
        })
    }

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
                <input onChange={updateField} name="email"   type="email"/>
                <p>Hasło</p>
                <input onChange={updateField} name="password"type="password"/>
                <p>Powtórz hasło</p>
                <input onChange={updateField} name="passwordRep"type="password"/>
                </div>
            </form>
            <div className="registerBtn">

                <Link className="navLogin" to="/logowanie"><a>Zaloguj</a></Link>
               <input onClick={handleSubmit}  className="navLogin" value="Załóż konto" type="submit"></input>
            </div>
        </div>
            </>
    );
};

export default SignIn;