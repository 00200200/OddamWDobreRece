import React, {useState} from 'react';
import HomeHeader from "./HomeHeader";
import {Link} from "react-router-dom";


// const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
// const validate = form => {
//     if (!form.email) {
//         return "E-mail jest wymagany"
//     } else if (/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(form.email)) {
//         return "E-mail jest nieprawidłowy"
//     }
//     if (!form.password) {
//         return "Hasło jest wymagane"
//     } else if (form.password.length < 5) {
//         return "Hasło jest za krótkie"
//     }
//     if (!form.passwordRep) {
//         return "Powtórz hasło"
//     } else if (!form.passwordRep.length < 5) {
//         return "Hasło jest za krótkie"
//     }
//     if (!form.password !== !form.passwordRep) {
//         return "Hasla nie są identyczne";
//     }
//     return null
// }

const SignIn = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [passwordRep, setPasswordRep] = useState("")
    const [emailError, setEmailError] = useState(null)
    const [passwordError, setPasswordError] = useState(null)
    const [passwordRepError, setPasswordRepError] = useState(null)
    const [formErrors,setFormErrors] = useState({
        emailError: "",
        passwordError: "",
        passwordRepError: ""
    })
    const handleSubmit = async (e) => {
     e.preventDefault()
        if (!email) {
            // setEmailError("E-mail jest wymagany")
            setFormErrors({...formErrors, emailError: "E-mail jest wymagany"})
        } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(email)) {
            setFormErrors({...formErrors, emailError: "E-mail jest nieprawidłowy"})

        } else setFormErrors({...formErrors,emailError:""})
        if (!password) {
            setPasswordError("Hasło jest wymagane")

        } else if (password.length < 5) {
            setPasswordError("Hasło jest za krótkie")

        } else (setPasswordError(null))
        if (!passwordRep) {
            setPasswordRepError("Powtórz hasło")

        } else if (passwordRep.length < 5) {
            setPasswordRepError("Hasło jest za krótkie")

        }
        if (password !== passwordRep) {
            setPasswordError( "Hasla nie są identyczne") && setPasswordRepError("Hasła nie są identyczne");
        }

        // setFormErrors({});

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
                    <p style={{color:"red"}}>{formErrors.emailError}</p>
                    <input onChange={e => setEmail(e.target.value)} name="email" type="email"/>
                    <p>Hasło</p>
                    <p style={{color:"red"}}>{passwordError}</p>
                    <input onChange={e => setPassword(e.target.value)} name="password" type="password"/>
                    <p>Powtórz hasło</p>
                    <p style={{color:"red"}}>{passwordError}</p>
                    <input onChange={e => setPasswordRep(e.target.value)} name="passwordRep" type="password"/>
                </div>
            </form>
            <div className="registerBtn">
                <Link className="navLogin" to="/logowanie"><a>Zaloguj</a></Link>
                <input onClick={handleSubmit} className="navLogin" value="Załóż konto" type="submit"></input>
            </div>
        </div>
    </>
)
}

;

export default SignIn;