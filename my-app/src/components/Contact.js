import React, {useState} from 'react';

const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        textMessage: "",
    })
    const [errors, setErrors] = useState({
        nameError: "",
        emailError: "",
        textMessageError: ""
    })


    const API = `https://fer-api.coderslab.pl/v1/portfolio/contact`


    const sendData = () => {
        fetch(API, {
            method: "POST",
            header: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(form),
        }).then((response) => {
            console.log(response.status)
            console.log(response.ok)

        })
    }
    const Validation = () => {

        if (!form.email) {
            setErrors({...errors, emailError: "E-mail jest wymagany"})

        } else if (!/^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i.test(form.email)) {
            setErrors({...errors, emailError: "E-Mail jest nieprawidłowy"})
        } else {
            setErrors({...errors, emailError: ""})
        }
        if (!form.name) {
            setErrors({...errors, nameError: "Nazwa jest wymagana"})
        } else if ((/\s/.test(form.name))) {
            setErrors({...errors, nameError: "Nazwa musi być jednym wyrazem"})
        } else {
            setErrors({...errors, nameError: ""})
        }
        if (!form.textMessage){
            setErrors({...errors,textMessageError: "Wiadomość jest wymagana"})
        } else if (form.textMessage.length <120){
            setErrors({...errors,textMessageError: "Wiadomość jest za krótka"})
        }else {
            setErrors({...errors,textMessageError: ""})
        }
    }
    let regexp = /[a-zA-Z]+\s+[a-zA-Z]+/g;

    const handleSubmit = (e) => {
        e.preventDefault();
        sendData();
        console.log(form, errors)

        Validation();



    }

    const updateField = e => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
        })
    }

    return (
        <div className="contactContainer" id="contact">

            <div className="contactLeftSide">
                {/*<img className="contactLeftSideBackground" src={require("../assets/BackgroundImage.png").default}/>*/}
            </div>
            <div className="contactRightSide">
                <h1>Skontaktuj się z nami</h1>
                <img src={require("../assets//Decoration.svg").default}/>
                <form>
                    <div className="contactForm">
                        <div className="contactFormLeftSide">
                            <p>Wpisz swoje imię</p>
                            <p style={{color: "red"}}>{errors.nameError}</p>
                            <input name="name" onChange={updateField} type="text"/>
                        </div>
                        <div className="contactFormRightSide">
                            <p>Wpisz swój email</p>
                            <p style={{color: "red"}}>{errors.emailError}</p>
                            <input name="email" onChange={updateField} type="email"></input>
                        </div>
                    </div>
                    <div className="contactTextForm">
                        <p>Wpisz swoją wiadomość</p>
                        <p style={{color: "red", fontSize: "10px"}}>{errors.textMessageError}</p>
                        <textarea name="textMessage" onChange={updateField}/>
                    </div>
                    <div className="SubmitButtonContact">
                        <input onClick={handleSubmit} type="submit"></input>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;